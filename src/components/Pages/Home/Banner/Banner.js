import React from "react";
import img1 from "../../../../assets/images/forest.jpeg";
import img2 from "../../../../assets/images/lake.jpeg";
import img3 from "../../../../assets/images/sea-beach.webp";

const Banner = () => {
  return (
    <div>
      <div className="text-banner text-center lg:text-4xl sm:text-2xl text-xl text-white font-bold lg:py-20 sm:py-16 py-8">
        Explore our services, Enjoy your life
      </div>
      <div className="">
        <div className="flex justify-center ">
          <div className="grid grid-cols-3 w-3/5 gap-2">
            <div>
              <img className="lg:h-32 sm:h-24 h-20 rounded" src={img3} alt="" />
            </div>
            <div>
              <img className="lg:h-32 sm:h-24 h-20 rounded" src={img2} alt="" />
            </div>
            <div>
              <img className="lg:h-32 sm:h-24 h-20 rounded" src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:pt-16 sm:pt-12 pt-10">
          <button className="btn btn-secondary">Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
