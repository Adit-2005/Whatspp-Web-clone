#!/usr/bin/env bash
# Exit on first error
set -e

echo "📦 Installing dependencies..."
npm install

echo "🏗  Building project..."
npm run build
