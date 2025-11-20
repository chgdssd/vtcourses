import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_session")?.value;

  if (req.nextUrl.pathname.startsWith("/contents")) {
    if (token !== process.env.ADMIN_SESSION_TOKEN) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/contents/:path*"],
};
