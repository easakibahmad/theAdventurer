import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ServiceDetail = () => {
  const individualData = useLoaderData();
  const { _id, picture, placeName, price, rating, tripDetails } =
    individualData;
  console.log(_id);
  return (
    <div className="md:px-12 sm:px-6 px-2 py-12">
      <p className="md:text-4xl text-center text-2xl font-bold text-black">
        Visit now {placeName}!
        <span className="text-red-400"> We are always with you.</span>
      </p>

      {/* top section */}
      <div>
        <div className="grid grid-cols-2 py-12 gap-8">
          <div>
            <img
              className="rounded"
              src={picture ? picture : "not found"}
              alt="url invalid"
            />
          </div>
          <div className="flex items-center">
            <div>
              <div className="lg:py-2 py-1">
                <span className="sm:text-xl md:text-2xl text-md text-red-400 font-bold">
                  {placeName}
                </span>{" "}
              </div>
              <div className="lg:py-2 py-1">
                <span className="font-bold  sm:text-md text-sm">
                  Trip cost:{" "}
                </span>
                <span className="md:text-2xl text-md font-bold text-red-400">
                  {price}$
                </span>
              </div>
              <div className="flex md:text-3xl text-xl items-center lg:py-2 py-1 text-yellow-500">
                <div className="pr-2">{rating}</div>
                <div>
                  <AiFillStar></AiFillStar>
                </div>
                <div>
                  <AiFillStar></AiFillStar>
                </div>
                <div>
                  <AiFillStar></AiFillStar>
                </div>
                <div>
                  <AiFillStar></AiFillStar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-red-400 sm:text-xl text-md font-bold">
            About your trip:
          </span>
          <br />
          <span className="text-sm">{tripDetails}</span>
        </div>
      </div>

      {/* bottom section */}
    </div>
  );
};

export default ServiceDetail;
