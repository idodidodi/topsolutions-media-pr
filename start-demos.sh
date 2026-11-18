#!/bin/bash
# TopSolutions Media LTD - 3 Client Demo Launcher

echo "🚀 Starting TopSolutions Media 3 Options..."

# Kill any existing processes on these ports
lsof -ti:5001,5002,5003 | xargs kill -9 2>/dev/null

# Start the node multi-option server in background
node serve-options.js > /tmp/topsolutions-node.log 2>&1 &
NODE_PID=$!
echo $NODE_PID > /tmp/topsolutions-node.pid

sleep 1

# Start Cloudflare tunnels in background
rm -f /tmp/tunnel-opt1.log /tmp/tunnel-opt2.log /tmp/tunnel-opt3.log

cloudflared tunnel --url http://localhost:5001 > /tmp/tunnel-opt1.log 2>&1 &
echo $! > /tmp/tunnel-opt1.pid

cloudflared tunnel --url http://localhost:5002 > /tmp/tunnel-opt2.log 2>&1 &
echo $! > /tmp/tunnel-opt2.pid

cloudflared tunnel --url http://localhost:5003 > /tmp/tunnel-opt3.log 2>&1 &
echo $! > /tmp/tunnel-opt3.pid

echo "⏳ Generating temporary public domains (takes ~5 seconds)..."
sleep 5

URL1=$(grep -o 'https://[-a-zA-Z0-9]*\.trycloudflare\.com' /tmp/tunnel-opt1.log | head -n 1)
URL2=$(grep -o 'https://[-a-zA-Z0-9]*\.trycloudflare\.com' /tmp/tunnel-opt2.log | head -n 1)
URL3=$(grep -o 'https://[-a-zA-Z0-9]*\.trycloudflare\.com' /tmp/tunnel-opt3.log | head -n 1)

echo ""
echo "=========================================================="
echo "✨ 3 OPTIONS ARE LIVE FOR YOUR CLIENT:"
echo "=========================================================="
echo "Option 1 (Executive Corporate):  $URL1"
echo "Option 2 (Tech Programmatic):     $URL2"
echo "Option 3 (Editorial Agency):      $URL3"
echo "=========================================================="
echo "Run ./stop-demos.sh to shut down."
