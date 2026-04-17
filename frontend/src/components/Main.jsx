import React from "react";
import ContactSticky from "./ContactSticky";

const Main = () => {
  return (
    <div className="w-full  min-h-screen bg-black flex flex-col justify-center items-center relative ">
      <ContactSticky />
      <h1 className="text-white text-2xl font-bold">main</h1>
    </div>
  );
};

export default Main;
