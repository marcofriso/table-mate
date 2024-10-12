import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

const allowedOrigins = [
  "http://localhost:3000/",
  "https://table-mate.vercel.app/",
  "https://marcofriso.com/",
  "https://tablemate.marcofriso.com/",
];
const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
const authPathsToMatch = ["/api/auth/me", "/bookings", "/reserve"];

export async function middleware(request: NextRequest) {
  // CORS
  if (request.nextUrl.pathname.startsWith("/api/:path*")) {
    const origin = request.headers.get("origin") ?? "";
    const isAllowedOrigin = allowedOrigins.includes(origin);

    const isPreflight = request.method === "OPTIONS";
    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
        ...corsOptions,
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }

    const response = NextResponse.next();
    if (isAllowedOrigin) {
      response.headers.set("Access-Control-Allow-Origin", origin);
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  // Auth
  if (
    authPathsToMatch.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    const jwtToken = request.cookies.get("jwt")?.value;

    if (!jwtToken) {
      console.error("No JWT token found in cookies");
      return NextResponse.redirect(new URL("/", request.url));
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
      await jose.jwtVerify(jwtToken, secret);
    } catch (error) {
      console.error("Invalid JWT token", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
