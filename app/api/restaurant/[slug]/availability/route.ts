import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { times } from "../../../../../utils/data";

type SlugParam = {
  params: {
    slug: string;
  };
};

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: SlugParam) {
  const slug = params.slug;
  const day = request.nextUrl.searchParams.get("day");
  const time = request.nextUrl.searchParams.get("time");
  const partySize = request.nextUrl.searchParams.get("partySize");

  if (!day || !time || !partySize) {
    return NextResponse.json(
      { errorMessage: "Invalid data provided" },
      { status: 400 }
    );
  }

  // const restaurant = await prisma.restaurant.findUnique({
  //   where: {
  //     slug,
  //   },
  //   select: {
  //     tables: true,
  //     open_time: true,
  //     close_time: true,
  //   },
  // });

  // if (!restaurant) {
  //   return NextResponse.json(
  //     { errorMessage: "Invalid data provided" },
  //     { status: 400 }
  //   );
  // }
  //

  const searchTimes = times.find((t) => t.time === time)?.searchTimes;

  if (!searchTimes) return "no search times";

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  // return NextResponse.json({ slug, day, time, partySize }, { status: 200 });

  return NextResponse.json({ searchTimes, bookings }, { status: 200 });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2024-09-09&time=12:00:00.000Z&partySize=4
