# 🛡️ MiniSIEM Dashboard

<p align="center">
  <img src="assets/capa.png" alt="MiniSIEM Dashboard" width="600"/>
</p>

MiniSIEM is a lightweight and modular Security Information and Event Management (SIEM) simulator.  
It was designed to showcase my ability to deliver a full-stack cybersecurity dashboard that ingests, stores, visualizes and interacts with real-time log data.

---

## 🚀 Highlights

- 🧠 Built with **FastAPI**, **React**, **Tailwind CSS**, **SQLite**, and **Docker**
- 📊 Real-time log ingestion and visualization (auto-refreshing every 5 seconds)
- 🔍 Filters by **severity**, **IP address**, **hostname**, and **event content**
- ⚠️ Event severity indicator with pulsing animation for `CRITICAL` logs
- 📈 Live bar chart with severity breakdown over time (LOW, MEDIUM, HIGH, CRITICAL)
- 🌘 Responsive dark mode with professional UI design
- 📥 One-click **JSON export** of filtered logs
- 💡 Built to mimic the behavior of a real-world SOC or SIEM environment

---

## 🧱 Architecture

- **Backend:** FastAPI REST API that receives and stores logs in SQLite
- **Frontend:** React dashboard with live updates using Axios
- **Log Generator:** Python script that simulates log entries for various security scenarios
- **Docker:** Multi-container environment using Docker Compose
- **Database:** Lightweight and persistent via SQLite (no external DB required)

---

## 🧪 Sample Log Entry

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

## 🔧 How to Run

### 🐧 Linux

```bash
git clone https://github.com/your-username/minisiem-dashboard.git
cd minisiem-dashboard
chmod +x setup_minisiem_linux.sh
./setup_minisiem_linux.sh
```

### 🪟 Windows

> Requirements: [Docker Desktop](https://www.docker.com/products/docker-desktop) and [Node.js](https://nodejs.org/)

```cmd
Double-click setup_minisiem_windows.bat
```

---

## 🌐 Access

- **Frontend UI:** http://localhost:5173
- **API Docs (Swagger):** http://localhost:8000/docs

---

## 📌 Why This Project Matters

This project was developed to **demonstrate my technical versatility** in the cybersecurity domain:

- ✔️ Real-time event handling & frontend visualization
- ✔️ Full-stack containerized deployment
- ✔️ Clean, readable code with modular components
- ✔️ Effective use of modern frameworks in both frontend and backend
- ✔️ Ability to simulate SOC behavior and event flow

---

## 👨‍💻 About the Author

**Gabriel Pereira**  
Security Operations Manager | SIEM Engineer | DevSecOps Enthusiast  
🔗 [LinkedIn](https://www.linkedin.com/in/gabisecurity) | 🌐 [Portfolio](https://gabisecurity.com)

---

## 💬 Feedback & Collaboration

I am actively looking for international opportunities in cybersecurity and software security engineering.  
If you're hiring or have feedback, I'd love to hear from you.
