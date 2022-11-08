import React from "react";

const Addservice = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
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
            placeholder="Enter the place name"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="text"
            placeholder="Provide the picture url"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="text"
            placeholder="Enter the price"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <input
            type="text"
            placeholder="Type a rating (should be a number between 1-5)"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <textarea
            className="textarea textarea-accent my-2 w-full"
            placeholder="Write a brief description"
            required
          ></textarea>
          <div className="flex justify-center">
            <button className="bg-red-400 px-3 py-2 font-bold mt-2 rounded-md text-sm">
              Add service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservice;
