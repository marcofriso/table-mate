import RestaurantNavBar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export const metadata = {
  title: "Milestones Grill (Toronto) | TableMate",
};

const Restaurant = () => (
  <>
    <div className="bg-white w-[70%] rounded p-3 shadow">
      <RestaurantNavBar />
      <Title />
      <Ratings />
      <Description />
      <Images />
      <Reviews />
    </div>
    <div className="w-[27%] relative text-reg">
      <ReservationCard />
    </div>
  </>
);

export default Restaurant;
