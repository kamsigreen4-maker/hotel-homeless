#!/usr/bin/env bash
set -euo pipefail

# If server.pid exists and the process is running, report and exit
if [ -f server.pid ]; then
  PID=$(cat server.pid)
  if ps -p "$PID" > /dev/null 2>&1; then
    echo "Server already running (PID $PID)"
    ps -p "$PID" -o pid,cmd || true
    exit 0
  else
    echo "Removing stale server.pid"
    rm -f server.pid
  fi
fi

# Start the static server in background, save PID, show status and log
nohup python3 -m http.server 8000 --bind 127.0.0.1 > server.log 2>&1 & echo $! > server.pid
sleep 0.2
PID=$(cat server.pid)
ps -p $PID -o pid,cmd || true

echo '--- server.log (first 20 lines) ---'
tail -n +1 server.log | sed -n '1,20p'
