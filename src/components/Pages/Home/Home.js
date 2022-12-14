import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import ExploreMore from "./ExploreMore/ExploreMore";
import "./Home.css";
import Services from "./Services/Services";
import Vacation from "./Vacation/Vacation";

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
      <div>
        <ExploreMore></ExploreMore>
      </div>
      <div>
        <Vacation></Vacation>
      </div>
    </div>
  );
};

export default Home;
