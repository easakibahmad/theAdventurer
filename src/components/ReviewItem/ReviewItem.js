import React from "react";

const ReviewItem = ({ item }) => {
  const { opinion, reviewerName, reviewerPhoto } = item;

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
        <span>'</span>
        {opinion}
        <span>'</span>
      </div>
    </div>
  );
};

export default ReviewItem;
