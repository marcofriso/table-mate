import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get("jwt")?.value;

  if (!jwtToken) {
    console.error("No JWT token found in cookies");
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_SERVER}/`);
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(jwtToken, secret);
  } catch (error) {
    console.error("Invalid JWT token", error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_SERVER}/`);
  }
}

export const config = {
  matcher: ["/api/auth/me", "/bookings", "/reserve/:slug*"],
};
