import { 193.46.81.88 } from "@/lib/db";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM users LIMIT 50");
  return Response.json(rows);
}
