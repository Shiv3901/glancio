#!/bin/bash

# Build script for Glancio frontend
echo "🚀 Building Glancio frontend..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build Tailwind CSS
echo "🎨 Building Tailwind CSS..."
npm run build-css-prod

# Check if build was successful
if [ -f "public/styles/main.css" ]; then
    echo "✅ CSS build successful!"
    echo "📊 CSS file size: $(wc -c < public/styles/main.css) bytes"
else
    echo "❌ CSS build failed!"
    exit 1
fi

echo "�� Build complete!" 