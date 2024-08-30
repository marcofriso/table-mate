import React from "react";
import Header from "./components/Header";

const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main>
      <Header name={params.slug} />
      <div className="flex max-md:flex-col-reverse m-auto w-11/12 lg:w-2/3 justify-between items-start -mt-11 gap-4">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
