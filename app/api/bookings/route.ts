import { NextResponse } from "next/server";
import prisma from "@/utils/services/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const userBookings = await prisma.booking.findMany({
      where: {
        user_id: Number(userId),
      },
    });

    return NextResponse.json(userBookings, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
