import { 193.46.81.88 } from "@/lib/db";

export async function GET() {

  // TEAM MEMBERS
  const [[team]] = await db.query("SELECT COUNT(*) AS count FROM users");

  // CREATOR PROFILES
  const [[creators]] = await db.query("SELECT COUNT(*) AS count FROM creator_profiles");

  // OPEN TICKETS
  const [[tickets]] = await db.query("SELECT COUNT(*) AS count FROM tickets WHERE status = 'OPEN'");

  // LOG ENTRIES
  const [[logs]] = await db.query("SELECT COUNT(*) AS count FROM logs");

  // FIVEM STATUS (falls angelegt)
  const [[fivem]] = await db.query("SELECT players_online, max_players FROM fivem_status ORDER BY id DESC LIMIT 1");

  return Response.json({
    team: team.count,
    creators: creators.count,
    tickets: tickets.count,
    logs: logs.count,
    fivemOnline: fivem?.players_online ?? 0,
    fivemMax: fivem?.max_players ?? 128,
  });
}
