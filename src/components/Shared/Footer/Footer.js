import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import bottomImg from "../../../assets/images/footer-img.jpeg";

const Footer = () => {
  return (
    <footer data-theme="dark">
      <div className=" flex justify-center">
        <div className="py-8">
          <div className="">
            <img className="h-32 w-32 mx-auto rounded" src={bottomImg} alt="" />
          </div>
          <div className="text-center py-4">
            <span className="text-rose-400 lg:text-2xl text-md font-bold">
              The Adventurer (since 2022)
            </span>
            <br />
            <span className="lg:text-xl text-sm font-bold">
              Safe travel is our goal
            </span>
          </div>

          <div className="flex justify-center pb-2">
            <span className="text-sm">Social</span>
          </div>
          <div>
            <div className="flex justify-center gap-4">
              <Link>
                <FaFacebook></FaFacebook>
              </Link>
              <Link>
                <FaYoutube></FaYoutube>
              </Link>
              <Link>
                <FaTwitter></FaTwitter>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm pb-2">Ⓒ2022, The Adventurer</div>
    </footer>
  );
};

export default Footer;
