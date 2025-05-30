
@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

echo === Checking for Node.js and NPM ===
where node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b
)
where npm >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo NPM is not installed. Please install it with Node.js from https://nodejs.org/
    pause
    exit /b
)

echo === Checking for Docker ===
where docker >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Docker is not installed. Please install Docker Desktop from https://www.docker.com/products/docker-desktop
    pause
    exit /b
)

echo === Starting Docker Backend ===
cd backend
docker compose up --build -d
cd ..

echo === Installing Frontend Dependencies ===
cd frontend
npm install

echo === Starting Frontend ===
start cmd /k "npm run dev"
cd ..

echo === MiniSIEM Dashboard started successfully ===
pause
