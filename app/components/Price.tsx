import { PRICE } from "@prisma/client";
import React from "react";

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>€€</span>
          <span className="text-gray-400">€€</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span>€€€</span>
          <span className="text-gray-400">€</span>
        </>
      );
    } else if (price === PRICE.EXPENSIVE) {
      return (
        <>
          <span>€€€€</span>
        </>
      );
    }
  };

  return <p className="flex mr-3">{renderPrice()}</p>;
};

export default Price;
