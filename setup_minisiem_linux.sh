#!/bin/bash
echo "🚀 Iniciando instalação do MiniSIEM no Linux..."

# Instalar dependências se não existirem
command -v docker >/dev/null 2>&1 || { echo "❌ Docker não encontrado. Por favor, instale o Docker."; exit 1; }
command -v docker-compose >/dev/null 2>&1 || { echo "❌ Docker Compose não encontrado. Por favor, instale o docker-compose."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ Node.js (npm) não encontrado. Por favor, instale o Node.js."; exit 1; }

# Subir backend com Docker
echo "📦 Subindo o backend..."
cd backend
docker compose up -d --build
cd ..

# Instalar dependências e iniciar frontend
echo "📦 Instalando frontend..."
cd frontend
npm install
npm run dev
