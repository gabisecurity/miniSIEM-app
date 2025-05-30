#!/bin/bash

set -e

echo "🔧 Atualizando o sistema..."
sudo apt-get update && sudo apt-get upgrade -y

echo "🔍 Verificando dependências..."

install_if_missing() {
    if ! command -v $1 &> /dev/null; then
        echo "📦 Instalando $1..."
        sudo apt-get install -y $2
    else
        echo "✅ $1 já está instalado."
    fi
}

install_if_missing docker docker.io
install_if_missing docker-compose docker-compose
install_if_missing python3 python3
install_if_missing pip3 python3-pip
install_if_missing npm npm
install_if_missing node nodejs

echo "🔧 Garantindo que o Docker esteja ativo..."
sudo systemctl enable docker
sudo systemctl start docker

echo "📁 Navegando para a pasta backend..."
cd backend
echo "🐳 Subindo containers com Docker Compose..."
docker compose up -d --build
cd ..

echo "📁 Navegando para a pasta frontend..."
cd frontend
echo "📦 Instalando dependências do frontend..."
npm install
echo "🚀 Iniciando o frontend..."
npm run dev
