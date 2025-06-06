"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town (e.g. Prague)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-2 xs:px-9 py-2 text-white text-nowrap"
        onClick={() => {
          if (location === "") return;
          router.push(`/search?city=${location.toLowerCase()}`);
          setLocation("");
        }}
      >
        Let&apos;s go
      </button>
    </div>
  );
};

export default SearchBar;
