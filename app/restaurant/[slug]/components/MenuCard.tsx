import React from "react";

import { Item } from "@prisma/client";

const MenuCard = ({ item }: { item: Item }) => {
  return (
    <div className="border rounded p-3">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="font-light mt-1 text-sm">{item.description}</p>
      <p className="mt-7">{item.price}</p>
    </div>
  );
};

export default MenuCard;
