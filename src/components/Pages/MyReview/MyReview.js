import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import ReviewItem from "./ReviewItem/ReviewItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../../Hooks/useTitle";
import AnotherLoader from "../../Loader/AnotherLoader";

const MyReview = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    fetch(
      `https://the-adventurer-server.vercel.app/review?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("adventureToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setLoadData(false);
        setReview(data);
      });
  }, [user?.email, logOut]);

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

  const handleUpdate = (id, opinion) => {
    fetch(`https://the-adventurer-server.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ opinion: opinion }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          const remaining = review.filter((rvw) => rvw._id !== id);
          // console.log(remaining);
          const newReview = review.find((rvw) => rvw._id === id);
          // console.log(newReview);
          newReview.opinion = opinion;
          const newlyUpdates = [newReview, ...remaining];
          setReview(newlyUpdates);
          // console.log(newlyUpdates);
        }
      });
  };
  //   console.log(review);

  review.sort((a, b) => -a.date.localeCompare(b.date));

  return (
    <div className="md:py-16 shadow-md sm:py-12 py-8 lg:px-12 sm:px-8 px-2">
      {loadData && <AnotherLoader></AnotherLoader>}
      {!loadData && (
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
              handleUpdate={handleUpdate}
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
    </div>
  );
};

export default MyReview;
