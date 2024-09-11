import { PRICE } from "@prisma/client";
import Link from "next/link";

interface SideBarLocation {
  id: number;
  name: string;
}

interface SideBarCuisine {
  id: number;
  name: string;
}

const SearchSideBar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: SideBarLocation[];
  cuisines: SideBarCuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "€",
      className: "border w-full text-reg text-center rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "€€",
      className: "border w-full text-reg text-center p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "€€€",
      className: "border w-full text-reg text-center rounded-r p-2",
    },
  ];

  return (
    <>
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.length &&
          locations.map((location) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, city: location.name },
              }}
              className={`text-reg capitalize ${
                searchParams.city === location.name ? "font-bold" : "font-light"
              }`}
              key={location.id}
            >
              {location.name}
            </Link>
          ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.length &&
          cuisines.map((cuisine) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, cuisine: cuisine.name },
              }}
              className={`text-reg capitalize ${
                searchParams.cuisine === cuisine.name
                  ? "font-bold"
                  : "font-light"
              }`}
              key={cuisine.id}
            >
              {cuisine.name}
            </Link>
          ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }, index) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={`${className} ${
                searchParams.price === price ? "font-bold" : "font-light"
              }`}
              key={index}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3 pb-4">
        <div className="flex">
          <Link
            href={{
              pathname: "/search",
              query: {},
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
          >
            Reset
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchSideBar;
