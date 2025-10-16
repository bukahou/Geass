#!/bin/bash
set -e

# 镜像信息
IMAGE_NAME="bukahou/geass-web"
TAG="v1.0.0"

echo "🔧 [Step 1] 创建并启用 Buildx builder"
docker buildx create --name mybuilder --use || true
docker buildx inspect --bootstrap

echo "🚀 [Step 2] 构建并推送镜像: ${IMAGE_NAME}:${TAG}"
docker buildx build \
  -f Dockerfile/Dockerfile.web \
  --platform linux/amd64,linux/arm64 \
  -t ${IMAGE_NAME}:${TAG} \
  --push \
  ./geass_web
