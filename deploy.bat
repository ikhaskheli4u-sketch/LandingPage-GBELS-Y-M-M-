@echo off
setlocal
echo.
echo ==========================================
echo   GBELS Digital Hub - Final Fix & Deploy
echo ==========================================
echo.

:: Check for Node.js
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js/NPM is not installed! 
    echo Please install it from https://nodejs.org
    pause
    exit /b
)

echo 1. Installing dependencies...
call npm install
echo.

echo 2. Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed! Check the errors above.
    pause
    exit /b
)
echo.

echo 3. Deploying to Vercel...
echo (If asked for 'Link to existing project', say NO or press Enter)
echo (If asked for 'Setup and deploy', say YES)
npx vercel --prod --yes
echo.
echo 4. If you see a 404 error on the website:
echo Go to your Vercel Dashboard -> Settings -> General
echo and make sure 'Output Directory' is set to 'dist'.
echo.
pause
