import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImCircleRight } from "react-icons/im";
import avatar from "../../../../../assets/images/avatar.webp";
import "./Service.css";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { _id, picture, placeName, price, tripDetails, rating } = service;

  return (
    <div className="flex justify-center">
      <div className="border-r-red-700  rounded-xl bg-black text-white w-4/5 sm:w-64 md:w-full">
        <PhotoProvider>
          <PhotoView src={picture ? picture : avatar}>
            <Link>
              <img
                src={picture ? picture : avatar}
                alt=""
                className="w-full rounded lg:h-48  h-36"
              />
            </Link>
          </PhotoView>
        </PhotoProvider>
        {/* <img
          className="w-full rounded lg:h-48  h-36"
          src={picture ? picture : avatar}
          alt=""
        /> */}
        <div className="p-2">
          <div className="font-bold md:text-xl text-md text-red-400">
            {placeName}
          </div>
          <div className="text-sm">{tripDetails.slice(0, 100)}...</div>
          <div className="flex justify-between">
            <div className="md:text-2xl text-md font-bold text-red-400">
              {price}$
            </div>
            <div id="card-div" className="flex items-center text-yellow-500">
              <div className="pr-1">{rating}</div>
              <div>
                <AiFillStar></AiFillStar>
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-start py-2">
            <Link to={`/servicedetail/${_id}`}>
              <button className="card-btn px-2 pb-1 rounded-md bg-indigo-400 text-black">
                <span className="text-sm font-bold flex gap-1 pt-1 items-center">
                  <span>Service Detail</span>
                  <span>
                    <ImCircleRight></ImCircleRight>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
