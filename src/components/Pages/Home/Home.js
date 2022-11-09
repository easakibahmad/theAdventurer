import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import "./Home.css";
import Services from "./Services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div className="home">
        <Banner></Banner>
      </div>
      <div className="services">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
