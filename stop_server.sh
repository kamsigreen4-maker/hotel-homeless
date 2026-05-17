#!/usr/bin/env bash
set -euo pipefail

if [ -f server.pid ]; then
  PID=$(cat server.pid)
  if ps -p "$PID" > /dev/null 2>&1; then
    kill "$PID" && echo "Stopped server $PID"
  else
    echo "No process $PID running"
  fi
  rm -f server.pid
else
  echo "server.pid not found"
fi
