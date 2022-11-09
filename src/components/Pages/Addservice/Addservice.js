import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../../Hooks/useTitle";

const Addservice = () => {
  useTitle("Add Service");

  const [serviceValidity, setServiceValidity] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const picture = form.pictureUrl.value;
    const price = form.price.value;
    const placeName = form.placename.value;
    const tripDetails = form.tripDetails.value;
    const rating = form.rating.value;

    if (price < 0) {
      setServiceValidity("Trip cost should be positive number");
      return;
    }
    if (rating < 1 || rating > 5) {
      setServiceValidity("Rating should be a number between 1 to 5");
      return;
    }

    const service = {
      picture,
      price,
      placeName,
      tripDetails,
      rating,
    };

    // console.log(service);
    // form.reset();

    fetch("https://the-adventurer-server.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast(`Service added successfully!!`);
          setServiceValidity("");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center shadow-md  lg:py-16 py-8">
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
            placeholder="Provide the place photo url"
            name="pictureUrl"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="number"
            placeholder="Provide the place trip cost"
            name="price"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <input
            type="number"
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
          <p className="text-red-400 font-bold my-2">{serviceValidity}</p>
          <div className="flex justify-center">
            <button className="bg-red-400 px-3 py-2 font-bold mt-2 rounded-md text-sm">
              Add service
            </button>

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
        </form>
      </div>
    </div>
  );
};

export default Addservice;
