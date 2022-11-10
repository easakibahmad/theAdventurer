import React, { useEffect, useState } from "react";
import Loader from "../../../Loader/Loader";
import Explore from "./ExploreCard/Explore";

const ExploreMore = () => {
  const [exploreData, setExploreData] = useState([]);

  useEffect(() => {
    fetch(`https://the-adventurer-server.vercel.app/explore`)
      .then((res) => res.json())
      .then((data) => setExploreData(data));
  }, []);
  return (
    <>
      {!exploreData[0]?._id ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-8 lg:pt-12 md:pt-8 pt-4">
          <Loader></Loader>
          <Loader></Loader>
          <Loader></Loader>
        </div>
      ) : (
        <div className="md:px-12 py-8 md:py-16 shadow-md">
          <p className="md:text-4xl text-center md:text-start text-2xl font-bold text-black">
            <span className="text-red-400">Explore</span> More
          </p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-8 lg:pt-12 md:pt-8 pt-4">
            {exploreData.map((item) => (
              <Explore key={item._id} item={item}></Explore>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreMore;
