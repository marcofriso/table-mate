import React from "react";

const Loading = () => {
  return (
    <main>
      <div className="py-3 md:px-36 mt-10 flex flex-wrap justify-center">
        {new Array(12).fill(0).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Loading;
