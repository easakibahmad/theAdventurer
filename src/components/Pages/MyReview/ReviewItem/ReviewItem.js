import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "./ReviewItem.css";
import "react-toastify/dist/ReactToastify.css";

const ReviewItem = ({ item, handleDelete, handleUpdate }) => {
  //   console.log(item);
  const { _id, date, placeName, picture, opinion, rating } = item;
  // console.log(item);

  const [validOpinion, setValidOpinion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const opinion = form.opinion.value;

    if (opinion.length < 5) {
      setValidOpinion(
        "Please provide your opinion perfectly(at least 6 words)!!"
      );
      return;
    }
    setValidOpinion("");
    handleUpdate(_id, opinion);
    // console.log(_id, opinion);

    form.reset();
    toast(
      `Opinion updated successfully!! Thank You. Please close the modal now.`
    );
    setValidOpinion("");
  };
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
            <button>
              <label
                htmlFor="update-modal"
                className="custom-button text-sm border py-1 px-2 bg-red-400 font-bold rounded-md"
              >
                Edit this review?
              </label>
            </button>

            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="textarea textarea-accent my-2 w-full"
                    placeholder="Write your opinion"
                    name="opinion"
                  ></textarea>
                  <p className="text-sm text-rose-400">{validOpinion}</p>
                  <div className="flex justify-center">
                    <div className="flex justify-between">
                      <button className=" bg-red-400 px-3 py-2 font-bold mt-2 rounded-md text-sm">
                        Update
                      </button>
                      <div>
                        <label
                          htmlFor="update-modal"
                          className="btn btn-sm rounded-full absolute right-2 top-2"
                        >
                          x
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

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
      </div>
    </div>
  );
};

export default ReviewItem;
