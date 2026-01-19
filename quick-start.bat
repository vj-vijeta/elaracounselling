@echo off
echo.
echo 🌿 Elara Counselling - Quick Start Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first:
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

node --version
echo.

echo 📁 Setting up project structure...
if not exist "src" mkdir src

echo 📝 Organizing files...
if exist "App.jsx" move /Y App.jsx src\ >nul 2>nul
if exist "main.jsx" move /Y main.jsx src\ >nul 2>nul
if exist "index.css" move /Y index.css src\ >nul 2>nul

echo.
echo 📦 Installing dependencies...
echo    This may take a few minutes...
call npm install

echo.
echo ✨ Setup complete!
echo.
echo 🚀 To start the development server, run:
echo    npm run dev
echo.
echo 📖 The app will open at: http://localhost:5173
echo.
pause
