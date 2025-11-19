const WebSocket = require("ws");
const si = require("systeminformation");
const fetch = require("node-fetch");

const wss = new WebSocket.Server({ port: 4050 });

console.log("🔌 WonderLife WebSocket Live Monitor läuft auf Port 4050");

async function getSystem() {
  const cpu = await si.currentLoad();
  const mem = await si.mem();
  return {
    cpu: cpu.currentLoad.toFixed(1),
    ramUsed: ((mem.active / mem.total) * 100).toFixed(1),
    uptime: (await si.time()).uptime,
  };
}

async function getFiveM() {
  try {
    const info = await fetch("http://127.0.0.1:30120/info.json").then(r => r.json());
    const dynamic = await fetch("http://127.0.0.1:30120/dynamic.json").then(r => r.json());

    return {
      hostname: info.vars.sv_hostname,
      maxPlayers: info.vars.sv_maxClients,
      playersOnline: dynamic.players.length,
      resources: info.resources,
    };
  } catch (err) {
    return { offline: true };
  }
}

setInterval(async () => {
  const data = {
    type: "update",
    system: await getSystem(),
    fivem: await getFiveM(),
  };

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });

}, 500); // 0.5 Sekunden Update
