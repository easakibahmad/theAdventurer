import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import ReviewItem from "./ReviewItem/ReviewItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://the-adventurer-server.vercel.app/review?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceedToDelete = window.confirm("Are you sure to delete?");
    if (proceedToDelete) {
      fetch(`https://the-adventurer-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast(`Review deleted successfully!!`);
            const remaining = review.filter((rvw) => rvw._id !== id);
            setReview(remaining);
          }
        });
    }
  };
  //   console.log(review);
  return (
    <div className="md:py-16 shadow-md sm:py-12 py-8 lg:px-12 sm:px-8 px-2">
      {review[0]?._id && (
        <p className="md:text-4xl text-center sm:text-2xl text-xl font-bold text-black">
          You have a total of{" "}
          <span className="text-red-400">{review.length} reviews</span>
        </p>
      )}
      <div className="md:pt-12 pt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        {review[0]?._id &&
          review.map((item) => (
            <ReviewItem
              key={item._id}
              handleDelete={handleDelete}
              item={item}
            ></ReviewItem>
          ))}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
      </div>
      {!review[0]?._id && (
        <div className="md:text-4xl sm:text-2xl text-center text-xl font-bold text-black">
          <span className="text-red-400">No review</span> found yet
        </div>
      )}
    </div>
  );
};

export default MyReview;
