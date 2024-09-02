"use client";

import { useContext } from "react";
import Link from "next/link";
import AuthModalButton from "./AuthModalButton";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/utils/hooks/useAuth";

const NavBar = () => {
  const { loading, data } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-xl">
        TableMate
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
                onClick={signout}
              >
                Sign out
              </button>
            ) : (
              <>
                <AuthModalButton isSignin={true} />
                <AuthModalButton isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
