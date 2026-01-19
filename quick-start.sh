#!/bin/bash

echo "🌿 Elara Counselling - Quick Start Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Create project directory structure
echo "📁 Setting up project structure..."
mkdir -p src

# Move files to correct locations
echo "📝 Organizing files..."
mv App.jsx src/ 2>/dev/null || echo "App.jsx already in place"
mv main.jsx src/ 2>/dev/null || echo "main.jsx already in place"
mv index.css src/ 2>/dev/null || echo "index.css already in place"

echo ""
echo "📦 Installing dependencies..."
echo "   This may take a few minutes..."
npm install

echo ""
echo "✨ Setup complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "📖 The app will open at: http://localhost:5173"
echo ""
