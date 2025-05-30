
# 🛡️ MiniSIEM Dashboard

![MiniSIEM Dashboard Preview](./dd6c6444-6f26-47ed-b489-864ff3aa20c9.png)

Um projeto visualmente impressionante para simular um ambiente de monitoramento de eventos de segurança. Ideal para portfólios de profissionais da área de **Cybersecurity**, **DevSecOps**, **SOC Analysts** e **Pentesters** que desejam mostrar domínio técnico com visual profissional.

---

## 🚀 Recursos

- 📊 Dashboard com dados em tempo real
- ⚠️ Logs categorizados por severidade: LOW, MEDIUM, HIGH, CRITICAL
- 🌒 Modo escuro com alto contraste
- 🧠 Filtro por IP, mensagem, host e severidade
- 📦 Exportação dos logs em JSON
- 📈 Gráfico dinâmico por severidade com animação
- ✅ Rodando em `React`, `FastAPI`, `Docker` e `SQLite`

---

## 📦 Instalação rápida (Linux)

```bash
git clone https://github.com/seuusuario/minisiem-dashboard.git
cd minisiem-dashboard
chmod +x setup_minisiem_linux.sh
./setup_minisiem_linux.sh
```

---

## 🪟 Instalação rápida (Windows)

1. Instale o [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Instale o [Node.js](https://nodejs.org/)
3. Dê dois cliques no arquivo:

```
setup_minisiem_windows.bat
```

> Ele irá instalar tudo e iniciar automaticamente o sistema.

---

## 🔗 Acesso

- **Frontend (React):** http://localhost:5173  
- **Backend (FastAPI):** http://localhost:8000/docs

---

## 🧪 Exemplo de eventos capturados

```json
{
  "timestamp": "2025-05-30T00:14:56.410Z",
  "source_ip": "192.168.1.100",
  "event_type": "PORT_SCAN",
  "message": "Port scan detected from 192.168.1.100",
  "origin": "snort",
  "hostname": "host-3",
  "severity": "HIGH"
}
```

---

## 👨‍💻 Feito por Gabriel Pereira

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/gabisecurity/)  
Veja mais projetos em [gabisecurity.com](https://gabisecurity.com)

---
