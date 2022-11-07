import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const [error, setError] = useState();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(email, password);

    const handleProfileInfo = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile)
        .then(() => {
          console.log("updated");
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    if (password.length < 6) {
      setError("password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        form.reset();
        handleProfileInfo(name, photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div data-theme="garden" className=" pt-4 pb-12 shadow-xl">
      <div className="hero">
        <div data-theme="forest" className="hero-content rounded flex-col">
          <div className="text-center lg:text-left">
            <p className="text-3xl text-white font-bold">Sign Up</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit}
              className="card-body rounded bg-gray-400"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <p className="text-red-700">
                <small>{error}</small>
              </p>

              <div className="form-control mt-6">
                <button className="btn btn-success text-rose-900">
                  Signup
                </button>
              </div>

              <p>
                <small className="text-black">
                  <span className="pr-2 font-bold">
                    Already have an account?
                  </span>
                  <Link to="/login" className="text-yellow-700 font-bold">
                    log in now
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
