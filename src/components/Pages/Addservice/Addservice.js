import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addservice = () => {
  const serviceToast = () => {
    toast(`Service added successfully!!`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const picture = form.pictureUrl.value;
    const price = form.price.value;
    const placeName = form.placename.value;
    const tripDetails = form.tripDetails.value;
    const rating = form.rating.value;

    const service = {
      picture,
      price,
      placeName,
      tripDetails,
      rating,
    };

    // console.log(service);
    // form.reset();

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center lg:my-16 my-8">
      <div className="md:w-2/5 w-4/5 ">
        <p className="md:text-3xl mb-4 text-center  text-xl font-bold text-black">
          Add <span className="text-red-400">your</span> desired
          <span className="text-red-400"> Service</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="placename"
            placeholder="Enter the place name"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="text"
            placeholder="Provide the picture url"
            name="pictureUrl"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="text"
            placeholder="Enter the price"
            name="price"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <input
            type="text"
            placeholder="Type a rating (should be a number between 1-5)"
            name="rating"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <textarea
            className="textarea textarea-accent my-2 w-full"
            placeholder="Write a brief description"
            name="tripDetails"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              onClick={() => serviceToast()}
              className="bg-red-400 px-3 py-2 font-bold mt-2 rounded-md text-sm"
            >
              Add service
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
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservice;
