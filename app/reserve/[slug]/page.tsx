import NavBar from "@/app/components/NavBar";
import Header from "./components/Header";
import Form from "./components/Form";
import React from "react";

const Reserve = () => (
  <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header />
          <Form />
        </div>
      </div>
    </main>
  </main>
);

export default Reserve;
