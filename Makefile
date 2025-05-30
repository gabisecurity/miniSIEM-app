# Makefile para facilitar o uso do MiniSIEM

# 🐳 Backend
up:
	cd backend && docker compose up --build

down:
	cd backend && docker compose down

# 🖥️ Frontend
frontend:
	cd frontend && npm install && npm run dev

# 🧰 Setup completo
setup:
	cd frontend && npm install
	pip install -r backend/requirements.txt || true

# 🧼 Limpeza
clean:
	docker system prune -f
