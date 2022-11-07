import React, { useEffect, useState } from "react";
import { ImCircleRight } from "react-icons/im";
import { Link } from "react-router-dom";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="px-12 py-16">
      <p className="text-4xl font-bold text-white">
        Our <span className="text-red-400">Services</span>
      </p>
      <div className="grid grid-cols-3 gap-4 pt-12">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center lg:pt-16 sm:pt-12 pt-10">
        <Link to="">
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
