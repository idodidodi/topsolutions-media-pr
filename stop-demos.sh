#!/bin/bash
# Stop all TopSolutions Media Demo tunnels and servers

echo "🛑 Stopping all TopSolutions Media demo servers and tunnels..."

# Kill by PID files if exist
[ -f /tmp/topsolutions-node.pid ] && kill -9 $(cat /tmp/topsolutions-node.pid) 2>/dev/null && rm -f /tmp/topsolutions-node.pid
[ -f /tmp/tunnel-opt1.pid ] && kill -9 $(cat /tmp/tunnel-opt1.pid) 2>/dev/null && rm -f /tmp/tunnel-opt1.pid
[ -f /tmp/tunnel-opt2.pid ] && kill -9 $(cat /tmp/tunnel-opt2.pid) 2>/dev/null && rm -f /tmp/tunnel-opt2.pid
[ -f /tmp/tunnel-opt3.pid ] && kill -9 $(cat /tmp/tunnel-opt3.pid) 2>/dev/null && rm -f /tmp/tunnel-opt3.pid

# Free up ports
lsof -ti:5001,5002,5003 | xargs kill -9 2>/dev/null
pkill -f "cloudflared tunnel" 2>/dev/null

echo "✅ All demo servers and tunnels are stopped. Cleaned up successfully."
