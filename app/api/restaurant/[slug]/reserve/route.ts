import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
      id: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json(
      { errorMessage: "Restaurant not found" },
      { status: 400 }
    );
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return NextResponse.json(
      { errorMessage: "Restaurant is not open at that time" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    slug,
    day,
    time,
    partySize,
  });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2024-09-09&time=15:00:00.000Z&partySize=4
