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

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json(
      { errorMessage: "Invalid data provided" },
      { status: 400 }
    );
  }

  const tables = restaurant.tables;

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

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObj[t.date.toISOString()]) {
        if (bookingTablesObj[t.date.toISOString()][table.id]) return false;
      }

      return true;
    });
  });

  const availabilities = searchTimesWithTables.map((t) => {
    const sumSeats = t.tables.reduce((sum, table) => {
      return sum + table.seats;
    }, 0);

    return {
      time: t.time,
      available: sumSeats >= parseInt(partySize),
    };
  });

  // return NextResponse.json({ slug, day, time, partySize }, { status: 200 });
  return NextResponse.json({ availabilities }, { status: 200 });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2024-09-09&time=12:00:00.000Z&partySize=4
