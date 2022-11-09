import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import ServiceReview from "./ServiceReviews/ServiceReviews";
import AnotherLoader from "../../Loader/AnotherLoader";

const ServiceDetail = () => {
  useTitle("Service Detail");
  const individualData = useLoaderData();
  const { _id, picture, placeName, price, rating, tripDetails } =
    individualData;

  const { user } = useContext(AuthContext);

  const [serviceValidity, setServiceValidity] = useState("");

  const [reviewData, setReviewData] = useState([]);

  const [dataLoader, setDataLoader] = useState(true);

  const [specificData, setSpecificData] = useState([]);

  const [newId, setNewId] = useState("");

  useEffect(() => {
    fetch(`https://the-adventurer-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setDataLoader(false);
        setReviewData(data);
      });
  }, [_id]);

  useEffect(() => {
    fetch(`https://the-adventurer-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        const specificNewData = reviewData.filter(
          (item) => item.reviewerName === user?.displayName
        );
        setSpecificData(specificNewData);
      });
  }, [reviewData]);

  // console.log(reviewData);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const opinion = form.opinion.value;
    const rating = form.rating.value;

    const reviewService = {
      reviewItemID: _id,
      opinion,
      date: new Date(),
      picture,
      placeName,
      rating,
      reviewerName: user?.displayName,
      reviewerPhoto: user?.photoURL,
      reviewerEmail: user?.email,
    };

    if (!user?.uid) {
      setServiceValidity("Please log in first!!");
      return;
    }

    if (opinion === "" || rating === "" || (opinion === "" && rating === "")) {
      setServiceValidity("Please fill out above fields carefully!!");
      return;
    }
    if (rating < 1 || rating > 5) {
      setServiceValidity("Rating should be a number between 1 to 5");
      return;
    }

    if (specificData?.length > 0) {
      setServiceValidity(
        "You have already reviewed it, visit your reviews to edit."
      );
      return;
    }

    // console.log(reviewService);

    fetch("https://the-adventurer-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast(`You reviewed ${placeName} successfully!!`);
          setNewId(data?.insertedId);
          // newId = data.insertedId;
          // console.log(data);
          form.reset();
          setServiceValidity("");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`https://the-adventurer-server.vercel.app/onereview/${newId}`)
      .then((res) => res.json())
      .then((data) => {
        const reviewUpdatedData = [...reviewData, data];
        setReviewData(reviewUpdatedData);
      });
  }, [newId]);

  reviewData.sort((a, b) => -a.date.localeCompare(b.date));

  return (
    <>
      {dataLoader ? (
        <AnotherLoader></AnotherLoader>
      ) : (
        <div className="md:px-12 shadow-md sm:px-6 px-2 py-12">
          <p className="md:text-4xl text-center sm:text-2xl text-xl font-bold text-black">
            Visit now {placeName}!
            <span className="text-red-400"> We are always with you.</span>
          </p>

          {/* top section */}
          <section>
            <div className="grid grid-cols-2 py-12 gap-8">
              <div>
                <img
                  className="rounded w-full lg::h-52 md:h-48 sm:h-36 h-32"
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
          </section>

          {/* bottom section */}

          <section className="py-16 gap-8">
            <p className="md:text-4xl text-center sm:text-2xl text-xl font-bold text-black">
              Top <span className="text-red-400">reviews</span>
            </p>
            {reviewData[0]?._id ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 pt-6">
                {reviewData.map((item) => (
                  <ServiceReview key={item._id} item={item}></ServiceReview>
                ))}
              </div>
            ) : (
              <p className="text-center font-sm pt-4 font-bold">
                No reviews found yet
              </p>
            )}

            <div className="mt-16">
              <p className="md:text-3xl text-center sm:text-xl text-md font-bold text-black">
                Review <span className="text-red-400">this service</span>
              </p>
              <div className="lg:w-2/5 md:w-3/5 w-4/5   mx-auto">
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="textarea textarea-accent my-2 w-full"
                    placeholder="Write your opinion"
                    name="opinion"
                  ></textarea>
                  <input
                    type="number"
                    placeholder="Type a rating (should be a number between 1-5)"
                    name="rating"
                    className="input input-bordered my-2 input-accent w-full"
                  />
                  <p className="text-red-400 font-bold my-2">
                    {serviceValidity}
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-red-400 px-3 py-2 font-bold mt-2 rounded-md text-sm">
                      Review Now
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
          </section>
        </div>
      )}
    </>
  );
};

export default ServiceDetail;
