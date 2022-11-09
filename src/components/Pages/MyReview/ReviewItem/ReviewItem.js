import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./ReviewItem.css";

const ReviewItem = ({ item, handleDelete }) => {
  //   console.log(item);
  const { _id, date, placeName, picture, opinion, rating } = item;
  // console.log(item);
  return (
    <div className="border sm:w-full w-3/5 mx-auto rounded">
      <img className="h-36 rounded w-full" src={picture} alt="" />
      <div className="p-2">
        <div className="font-bold">{placeName}</div>
        <div className="text-yellow-500 flex items-center text-xl">
          <span className="pr-2">{rating}</span>
          <AiFillStar></AiFillStar>
        </div>
        <div className="text-sm">'{opinion}'</div>
        <div className="review-date">{date.slice(0, 10)}</div>
        <div className="mt-auto">
          <div className="mt-2">
            <button
              onClick={() => handleDelete(_id)}
              className="custom-button text-sm border py-1 px-2 bg-red-400 font-bold rounded-md"
            >
              Delete this review?
            </button>
          </div>
          <div className="mt-2">
            <button className="custom-button text-sm border py-1 px-2 bg-red-400 font-bold rounded-md">
              Edit this review?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
