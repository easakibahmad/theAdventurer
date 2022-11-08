import React from "react";

const ReviewItem = ({ item }) => {
  console.log(item);
  const { placeName, picture, opinion, rating } = item;
  return (
    <div className="border sm:w-full w-3/5 mx-auto">
      <img className="h-36 w-full" src={picture} alt="" />
      <div className="p-2">
        <div>{placeName}</div>
        <div>{rating}</div>
        <div>{opinion}</div>
      </div>
    </div>
  );
};

export default ReviewItem;
