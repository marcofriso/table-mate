import { NextResponse } from "next/server";
import prisma from "@/utils/services/db";

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const bookingId = searchParams.get("bookingId");

    if (!bookingId) {
      return NextResponse.json(
        { error: "Booking ID is required" },
        { status: 400 }
      );
    }

    // added to fix a Vercel DB bug
    await prisma.bookingsOnTables.deleteMany({
      where: {
        booking_id: Number(bookingId),
      },
    });

    await prisma.booking.delete({
      where: {
        id: Number(bookingId),
      },
    });

    return NextResponse.json(
      { message: "Booking deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
