
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime
import sqlite3

app = FastAPI()
DB_PATH = "data/logs.db"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LogEntry(BaseModel):
    timestamp: datetime
    source_ip: str
    event_type: str
    message: str
    origin: str
    hostname: str
    severity: str

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT,
            source_ip TEXT,
            event_type TEXT,
            message TEXT,
            origin TEXT,
            hostname TEXT,
            severity TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()

@app.post("/log")
def receive_log(entry: LogEntry):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        INSERT INTO logs (timestamp, source_ip, event_type, message, origin, hostname, severity)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (
        entry.timestamp.isoformat(),
        entry.source_ip,
        entry.event_type,
        entry.message,
        entry.origin,
        entry.hostname,
        entry.severity
    ))
    conn.commit()
    conn.close()
    return {"status": "log saved"}

@app.get("/events", response_model=List[LogEntry])
def get_events():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT timestamp, source_ip, event_type, message, origin, hostname, severity FROM logs ORDER BY timestamp DESC")
    rows = c.fetchall()
    conn.close()
    return [
        LogEntry(
            timestamp=row[0],
            source_ip=row[1],
            event_type=row[2],
            message=row[3],
            origin=row[4],
            hostname=row[5],
            severity=row[6]
        ) for row in rows
    ]
