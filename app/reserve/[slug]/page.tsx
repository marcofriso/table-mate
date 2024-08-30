import { notFound } from "next/navigation";
import Header from "./components/Header";
import Form from "./components/Form";
import prisma from "@/utils/services/db";

export const metadata = {
  title: "Reserve | TableMate",
};

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const Reserve = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header
            image={restaurant.main_image}
            name={restaurant.name}
            date={searchParams.date}
            partySize={searchParams.partySize}
          />
          <Form
            partySize={searchParams.partySize}
            slug={params.slug}
            date={searchParams.date}
          />
        </div>
      </div>
    </>
  );
};

export default Reserve;
