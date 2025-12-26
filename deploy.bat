@echo off
echo 🚀 Deploying Neptune Towing Website to GitHub Pages...
echo.

echo 📦 Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo 🌐 Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo ❌ Deployment failed!
    pause
    exit /b 1
)

echo.
echo ✅ Deployment successful!
echo 🌐 Your website will be available at: https://alizaidi5110.github.io/neptune-towing
echo.
echo Note: It may take a few minutes for GitHub Pages to update.
pause