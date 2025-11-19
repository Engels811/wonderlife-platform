// @ts-nocheck
export async function GET() {
  const HOST = process.env.FIVEM_HOST;   // z.B. 188.40.12.34
  const PORT = process.env.FIVEM_PORT;   // z.B. 30120

  try {
    // FiveM Endpoints
    const infoRes = await fetch(`http://${HOST}:${PORT}/info.json`, { cache: "no-store" });
    const playersRes = await fetch(`http://${HOST}:${PORT}/players.json`, { cache: "no-store" });

    if (!infoRes.ok || !playersRes.ok) {
      throw new Error("FiveM returned no data");
    }

    const info = await infoRes.json();
    const players = await playersRes.json();

    return Response.json({
      online: players.length,
      max: info.vars.sv_maxClients,
      resources: info.resources.length,
      hostname: info.vars.sv_hostname,
      onlinePlayers: players,
      status: "online"
    });

  } catch (error) {
    return Response.json({
      status: "offline",
      online: 0,
      max: 0,
      resources: 0,
      hostname: "OFFLINE",
      onlinePlayers: []
    });
  }
}
