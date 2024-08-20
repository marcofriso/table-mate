import Link from "next/link";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Price from "@/app/components/Price";

interface Restaurant {
  id: number;
  location: Location;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  price: PRICE;
  slug: string;
}

const RestaurantCard = ({
  restaurant: { location, name, main_image, cuisine, price, slug },
}: {
  restaurant: Restaurant;
}) => (
  <div className="border-b flex pb-5 ml-4">
    <img src={main_image} alt="" className="w-44 h-36 rounded" />
    <div className="pl-5">
      <h2 className="text-2xl">{name}</h2>
      <div className="flex items-start">
        <div className="flex mb-2">*****</div>
        <p className="ml-2 text-sm">Awesome</p>
      </div>
      <div className="mb-9">
        <div className="font-light flex text-reg">
          <Price price={price} />
          <p className="mr-4 capitalize">{cuisine.name}</p>
          <p className="mr-4 capitalize">{location.name}</p>
        </div>
      </div>
      <Link href={`/restaurant/${slug}`} className="text-red-600">
        View more information
      </Link>
    </div>
  </div>
);

export default RestaurantCard;
