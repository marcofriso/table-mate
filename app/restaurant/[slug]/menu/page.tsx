import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";
import prisma from "@/utils/services/db";

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

export const metadata = {
  title: "Menu of Milestones Grill (Toronto) | TableMate",
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
};

export default RestaurantMenu;
