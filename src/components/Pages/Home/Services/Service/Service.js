import React from "react";

const Service = ({ service }) => {
  const { picture, placeName, price, tripDetails, rating } = service;
  return (
    <div className="border bg-black text-white">
      <img className="w-full h-32" src={picture} alt="" />
      <div className="p-2">
        <div>{placeName}</div>
        <div>{tripDetails.slice(0, 100)}...</div>
      </div>
    </div>
  );
};

export default Service;
