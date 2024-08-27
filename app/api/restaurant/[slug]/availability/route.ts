import { NextRequest, NextResponse } from "next/server";
import { times } from "../../../../../utils/data";

type SlugParam = {
  params: {
    slug: string;
  };
};

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

  const searchTimes = times.find((t) => t.time === time)?.searchTimes;

  // return NextResponse.json({ slug, day, time, partySize }, { status: 200 });

  return NextResponse.json({ searchTimes }, { status: 200 });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2024-09-09&time=20:00:00.000Z&partySize=4
