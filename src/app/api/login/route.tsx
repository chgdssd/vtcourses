import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
const cookieStore = await cookies();

cookieStore.set("admin_session", process.env.ADMIN_SESSION_TOKEN!, {
  httpOnly: true,
  secure: true,
  path: "/",
});

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid login" }, { status: 401 });
}
