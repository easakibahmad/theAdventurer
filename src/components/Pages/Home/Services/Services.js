import React, { useEffect, useState } from "react";
import { ImCircleRight } from "react-icons/im";
import { Link } from "react-router-dom";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://the-adventurer-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="md:px-12 py-8 md:py-16 shadow-md">
      <p className="md:text-4xl text-center md:text-start text-2xl font-bold text-black">
        Our <span className="text-red-400">Services</span>
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-8 lg:pt-12 md:pt-8 pt-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center lg:pt-16 sm:pt-12 pt-10">
        <Link to="/allservices">
          <button className="btn btn-accent text-black">
            <span className="pr-2">See All</span>
            <span className="text-xl">
              <ImCircleRight></ImCircleRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
