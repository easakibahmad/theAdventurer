import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { BsSuitHeartFill } from "react-icons/bs";
import "./Explore.css";

const Explore = ({ item }) => {
  const [love, setLove] = useState(false);

  const { img, about } = item;
  return (
    <div className="flex justify-center">
      <div className="border-r-red-700  rounded-xl bg-black text-white w-4/5 sm:w-64 md:w-full">
        <PhotoProvider>
          <PhotoView src={img}>
            <Link>
              <img
                src={img}
                alt="Not found"
                className="w-full rounded lg:h-48  h-36"
              />
            </Link>
          </PhotoView>
        </PhotoProvider>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="about">{about}</div>
            <div className="bg-white rounded-full text-rose-600 flex justify-center items-center">
              <div
                onClick={() => {
                  setLove(true);
                }}
              >
                {love ? (
                  <Link>
                    <div className="p-2 text-rose-600 md:text-2xl sm:text-xl text-sm">
                      <BsSuitHeartFill></BsSuitHeartFill>
                    </div>
                  </Link>
                ) : (
                  <Link>
                    <div className="p-2 text-black md:text-2xl sm:text-xl text-sm">
                      <BsSuitHeartFill></BsSuitHeartFill>
                    </div>
                  </Link>
                )}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
