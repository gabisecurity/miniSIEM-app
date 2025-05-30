@echo off
echo Iniciando instalação do MiniSIEM no Windows...

REM Verificações manuais
echo Certifique-se de que o Docker Desktop e o Node.js estão instalados.
pause

REM Subir backend com Docker Compose
cd backend
docker compose up -d --build
cd ..

REM Instalar dependências do frontend
cd frontend
call npm install
call npm run dev
