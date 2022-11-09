import React from "react";
import "./ServiceReviews.css";

const ServiceReview = ({ item }) => {
  const { opinion, date, reviewerName, reviewerPhoto } = item;
  // console.log(user);
  return (
    <div className="border w-4/5 mx-auto p-2 rounded">
      <div className="flex justify-start items-center">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src={reviewerPhoto}
            alt="reviewer"
          />
        </div>
        <div className="pl-2 font-bold">{reviewerName}</div>
      </div>
      <div className="text-sm pt-2">
        <span>"</span>
        {opinion}
        <span>"</span>
      </div>
      <div className="review-date">{date.slice(0, 10)}</div>
    </div>
  );
};

export default ServiceReview;
