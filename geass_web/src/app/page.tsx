"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000010, 0.00012);

    // 📸 相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 230;

    // 🎥 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000010, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mount.appendChild(renderer.domElement);

    // 🌟 星星贴图
    const createStarTexture = () => {
      const size = 128;
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(255,255,255,0.6)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };
    const starTexture = createStarTexture();

    // 🌠 星点系统
    const starCount = 2500;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = 200 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const color = new THREE.Color().setHSL(
        0.55 + Math.random() * 0.15,
        0.7,
        0.8
      );
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      map: starTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // 🌫️ 星云 Shader
    const nebulaGeometry = new THREE.SphereGeometry(120, 64, 64);
    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x0a1b3f) },
        color2: { value: new THREE.Color(0x2e6cff) },
        color3: { value: new THREE.Color(0xff66cc) },
      },
      vertexShader: `
        varying vec3 vPos;
        void main() {
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPos;
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;

        float noise(vec3 p) {
          return sin(p.x * 1.2 + time * 0.3)
               + sin(p.y * 1.3 - time * 0.2)
               + sin(p.z * 1.1 + time * 0.4)
               + sin((p.x + p.y + p.z) * 0.7 - time * 0.1);
        }

        void main() {
          vec3 dir = normalize(vPos);
          float len = length(vPos) / 120.0;

          float n = noise(dir * 5.0 + len * 2.0);
          n = (n + 4.0) / 8.0;
          float turbulence = sin(n * 6.2831 + time * 0.5) * 0.5 + 0.5;

          vec3 col = mix(color1, color2, turbulence);
          col = mix(col, color3, smoothstep(0.6, 1.0, turbulence));

          float edge = smoothstep(0.4, 1.5, len + n * 0.2);
          float alpha = pow(1.0 - edge, 2.5) * 2.0;
          alpha *= turbulence * 1.8;

          float glow = exp(-pow(len * 3.0, 2.0)) * 1.8;
          col += glow * vec3(0.4, 0.5, 1.2);

          gl_FragColor = vec4(col * 2.0, alpha);
        }
      `,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });

    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // 🌀 动画循环
    let t = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      t += 0.005;
      nebulaMaterial.uniforms.time.value = t;

      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;
      nebula.rotation.y += 0.0001;

      // 💫 呼吸感
      nebula.scale.setScalar(1 + Math.sin(t * 0.25) * 0.05);

      renderer.render(scene, camera);
    };
    animate();

    // 🔄 窗口自适应
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="
        absolute top-[64px] left-[220px]
        w-[calc(100vw-220px)] h-[calc(100vh-64px)]
        overflow-hidden z-0
      "
    />
  );
}
