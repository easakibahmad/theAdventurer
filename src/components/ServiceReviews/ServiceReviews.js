import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const ServiceReview = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { opinion, reviewerName, reviewerPhoto } = item;
  console.log(user);
  return (
    <div className="border w-4/5 mx-auto p-2 rounded">
      <div className="flex justify-start items-center">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src={reviewerPhoto}
            alt="reviewer"
          />
        </div>
        <div className="pl-2 font-bold">{reviewerName}</div>
      </div>
      <div className="text-sm pt-2">
        <span>'</span>
        {opinion}
        <span>'</span>
      </div>
    </div>
  );
};

export default ServiceReview;
