import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import ReviewItem from "./ReviewItem/ReviewItem";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);
  //   console.log(review);
  return (
    <div className="md:py-16 sm:py-12 py-8 lg:px-12 sm:px-8 px-2">
      <p className="md:text-4xl text-center sm:text-2xl text-xl font-bold text-black">
        You have a total of <span className="text-red-400">8 reviews</span>
      </p>
      <div className="md:pt-12 pt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        {review[0]?._id ? (
          review.map((item) => (
            <ReviewItem key={item._id} item={item}></ReviewItem>
          ))
        ) : (
          <p className="md:text-4xl text-center sm:text-2xl text-xl font-bold text-black">
            <span className="text-red-400">No review</span> found yet
          </p>
        )}
      </div>
    </div>
  );
};

export default MyReview;
