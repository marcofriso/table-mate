import RestaurantNavBar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

export const metadata = {
  title: "Menu of Milestones Grill (Toronto) | TableMate",
};

const RestaurantMenu = () => (
  <>
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  </>
);

export default RestaurantMenu;
