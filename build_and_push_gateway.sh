#!/bin/bash
set -e

# 镜像名称与标签
IMAGE_NAME="bukahou/geass-gateway"
TAG="v1.0.0"

echo "🔧 [Step 1] Checking Buildx builder"
docker buildx create --name mybuilder --use || true
docker buildx inspect --bootstrap

echo "🚀 [Step 2] Building and pushing: ${IMAGE_NAME}:${TAG}"
docker buildx build \
  -f Dockerfile.gateway \
  --platform linux/amd64,linux/arm64 \
  -t ${IMAGE_NAME}:${TAG} \
  --no-cache \
  --push .
