import random
import time
import requests
from datetime import datetime

API_URL = "http://api:8000/log"

EVENTS = [
    {"event_type": "SSH_LOGIN_FAIL", "message": "Failed password for invalid user root from {ip} port 22", "origin": "sshd", "severity": "HIGH"},
    {"event_type": "SSH_LOGIN_SUCCESS", "message": "Accepted password for user1 from {ip} port 22", "origin": "sshd", "severity": "LOW"},
    {"event_type": "PORT_SCAN", "message": "Port scan detected from {ip}", "origin": "snort", "severity": "MEDIUM"},
    {"event_type": "FORBIDDEN_ACCESS", "message": "403 Forbidden: /admin/ from {ip}", "origin": "nginx", "severity": "MEDIUM"},
    {"event_type": "SQLI_ATTEMPT", "message": "Blocked SQLi attempt from {ip} in /login", "origin": "waf", "severity": "HIGH"},
    {"event_type": "MALICIOUS_FILE", "message": "Malicious file detected on host-{n}: malware.exe", "origin": "antivirus", "severity": "HIGH"},
    {"event_type": "USER_CREATED", "message": "User 'backup_admin' added via sudo on host-{n}", "origin": "system", "severity": "MEDIUM"}
]

def random_ip():
    return f"192.168.1.{random.randint(1, 254)}"

def random_hostname():
    return f"host-{random.randint(1, 20)}"

def generate_log():
    event = random.choice(EVENTS)
    ip = random_ip()
    hostname = random_hostname()
    timestamp = datetime.utcnow().isoformat()
    message = event["message"].replace("{ip}", ip).replace("{n}", str(random.randint(1, 100)))

    return {
        "timestamp": timestamp,
        "source_ip": ip,
        "event_type": event["event_type"],
        "message": message,
        "origin": event["origin"],
        "hostname": hostname,
        "severity": event["severity"]
    }

while True:
    log = generate_log()
    try:
        response = requests.post(API_URL, json=log)
        print(f"Sent: {log['event_type']} | Status: {response.status_code}")
    except Exception as e:
        print(f"Error: {e}")
    time.sleep(3)
