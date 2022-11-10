import React from "react";
import img1 from "../../../../assets/images/one.jpeg";
import img2 from "../../../../assets/images/two.jpeg";
import img3 from "../../../../assets/images/three.webp";
import img4 from "../../../../assets/images/four.webp";
import img5 from "../../../../assets/images/five.jpg";

const Vacation = () => {
  return (
    <div className="md:px-12 py-8 md:py-16 shadow-md">
      <div className="grid grid-cols-4">
        <div className="md:text-4xl sm:text-xl text-sm md:p-12 sm:p-8 p-4 my-auto font-bold">
          Enjoy life with{" "}
          <span className="text-red-400">heavenly adventures</span>
        </div>
        <div className="md:h-96 sm:h-76 h-48 grid grid-cols-1">
          <div>
            <img className="rounded w-full h-full" src={img1} alt="" />
          </div>
          <div className="pt-2">
            <img className="rounded w-full h-full" src={img2} alt="" />
          </div>
        </div>
        <div className="md:h-96 sm:h-76 h-48 py-8 px-4">
          <img className="rounded w-full h-full" src={img5} alt="" />
        </div>
        <div className="md:h-96 sm:h-76 h-48 grid grid-cols-1">
          <div>
            <img className="rounded w-full h-full" src={img4} alt="" />
          </div>
          <div className="pt-2">
            <img className="rounded w-full h-full" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
