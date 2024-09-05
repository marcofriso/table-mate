import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get("jwt")?.value;

  if (!jwtToken) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_SERVER}/`);
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(jwtToken, secret);
  } catch (error) {
    return NextResponse.json(
      { errorMessage: "Unauthorized request - 2" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/auth/me", "/testollo", "/reserve/:slug*"],
};
