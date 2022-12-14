import React, { useEffect, useState } from "react";
import useTitle from "../../../../../Hooks/useTitle";
import Loader from "../../../../Loader/Loader";
import Service from "../Service/Service";

const Allservices = () => {
  useTitle("All Services");
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://the-adventurer-server.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
      });
  }, []);

  allServices.sort((a, b) => -a.date.localeCompare(b.date));
  return (
    <div className="md:px-12 py-8 shadow-md md:py-16">
      <p className="md:text-4xl md:text-start text-center text-2xl font-bold text-black">
        All <span className="text-red-400">Services</span>
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-8 lg:pt-12 md:pt-8 pt-4">
        {!allServices[0]?._id ? (
          <>
            <Loader></Loader>
            <Loader></Loader>
            <Loader></Loader>
          </>
        ) : (
          allServices.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))
        )}
      </div>
    </div>
  );
};

export default Allservices;
