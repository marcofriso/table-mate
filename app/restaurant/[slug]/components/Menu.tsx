import React from "react";
import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

const Menu = ({ menu }: { menu: Item[] }) => (
  <main className="bg-white mt-5">
    <div>
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>
      {menu.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5">
          {menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">
          <p>This restaurant does not have a menu</p>
        </div>
      )}
    </div>
  </main>
);

export default Menu;
