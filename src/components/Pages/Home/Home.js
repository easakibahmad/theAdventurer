import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <div className="home">
        <Banner></Banner>
      </div>
      <div className="services">
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
