import React, { useEffect } from "react";
import Header from "../Header";
import Card from "../Card";

const Home = () => {

  return (
    <div className="w-full">
      <div>
        <Header />
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
