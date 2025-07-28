#!/bin/bash

# EEE Symposium 2025 Deployment Script
# This script builds and deploys the application

set -e

echo "🚀 Starting deployment for EEE Symposium 2025..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Run linting
echo "🔍 Running linting..."
pnpm lint

# Build for production
echo "🏗️ Building for production..."
pnpm build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Optional: Start preview server
if [ "$1" = "--preview" ]; then
    echo "🌐 Starting preview server..."
    pnpm preview
fi

echo "🎉 Deployment ready!"
echo "📁 Build output: ./dist"
echo "🌐 To preview: pnpm preview"
echo "🐳 To deploy with Docker: docker-compose up -d" 