import { PRICE } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import prisma from "@/utils/services/db";

export const metadata = {
  title: "Search | TableMate",
};

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany({ select: { name: true, id: true } });
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany({ select: { name: true, id: true } });
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 py-4 mx-auto w-11/12 lg:w-2/3 gap-x-2 gap-y-3">
        <div className="col-span-1 md:col-span-2">
          <SearchSideBar
            searchParams={searchParams}
            locations={locations}
            cuisines={cuisines}
          />
        </div>
        <div className="col-span-1 md:col-span-10">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
