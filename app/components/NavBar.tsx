"use client";

import { useContext } from "react";
import Link from "next/link";
import AuthModalButton from "./AuthModalButton";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/utils/hooks/useAuth";
import { BookingsContext } from "../context/BookingsContext";

const NavBar = () => {
  const { data } = useContext(AuthenticationContext);
  const { bookings } = useContext(BookingsContext);

  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-xl">
        TableMate
      </Link>
      <div>
        <div className="flex">
          {data ? (
            <>
              {bookings.length > 0 ? (
                <Link
                  href="/bookings"
                  className="bg-red-400 hover:bg-red-500 text-white border p-1 px-4 rounded mr-3"
                >
                  My Bookings
                </Link>
              ) : null}
              <button
                className="bg-blue-400 hover:bg-blue-500 text-white border p-1 px-4 rounded mr-3"
                onClick={signout}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <AuthModalButton isSignin={true} />
              <AuthModalButton isSignin={false} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
