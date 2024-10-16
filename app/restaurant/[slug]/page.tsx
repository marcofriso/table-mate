import { notFound } from "next/navigation";
import { Review } from "@prisma/client";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Description from "./components/Description";
import Images from "./components/Images";
import ReservationCard from "./components/ReservationCard";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import prisma from "@/utils/services/db";

export const metadata = {
  title: "Milestones Grill (Toronto) | TableMate",
};

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      open_time: true,
      close_time: true,
      slug: true,
      reviews: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="md:basis-[255px] max-md:w-full shrink-0 grow-0 text-reg md:relative">
        <ReservationCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
          slug={restaurant.slug}
        />
      </div>
    </>
  );
};

export default RestaurantDetails;
