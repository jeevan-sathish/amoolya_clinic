import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col ">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
