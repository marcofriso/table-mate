import Link from "next/link";
import AuthModal from "./AuthModal";

const NavBar = () => (
  <nav className="bg-white p-2 flex justify-between">
    <Link href="/" className="font-bold text-gray-700 text-xl">
      {" "}
      TableMate{" "}
    </Link>
    <div>
      <div className="flex">
        <div className="flex">
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
