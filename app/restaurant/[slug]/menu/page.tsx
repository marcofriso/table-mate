import RestaurantNavBar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

const RestaurantMenu = () => (
  <>
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  </>
);

export default RestaurantMenu;
