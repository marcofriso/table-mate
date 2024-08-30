import Link from "next/link";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Price from "@/app/components/Price";
import { calculateReviewRatingAverage } from "@/utils/functions/calculateReviewRatingAverage";
import Stars from "@/app/components/Stars";

interface Restaurant {
  id: number;
  location: Location;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const RestaurantCard = ({
  restaurant: { location, name, main_image, cuisine, price, slug, reviews },
}: {
  restaurant: Restaurant;
}) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(reviews);

    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };

  return (
    <div className="border-b flex pb-5 ml-4">
      <div className="w-20 xs:w-36 sm:w-44">
        <img src={main_image} alt="" className="rounded object-cover h-full" />
      </div>
      <div className="pl-5">
        <h2 className="text-2xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
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
};

export default RestaurantCard;
