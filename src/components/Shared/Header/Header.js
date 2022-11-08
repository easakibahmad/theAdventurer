import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { AuthContext } from "../../../Context/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-xl">
      <div>
        <Link className="btn btn-ghost normal-case text-2xl ">
          <span className="header-text">The Adventurer</span>
        </Link>
        <div className="lg:block hidden">
          <Link className="lg:px-4 text-red-500 header-link" to="/">
            Home
          </Link>
          <Link className="lg:px-4 text-red-500 header-link" to="/blogs">
            Blogs
          </Link>
          <Link to="/myreview" className="lg:px-4  text-red-500 header-link">
            My Reviews
          </Link>
          <Link to="/addservice" className="lg:px-4 text-red-500 header-link">
            Add Service
          </Link>
          {!user?.uid ? (
            <Link className="lg:px-4  text-red-500 header-link" to="/login">
              Login
            </Link>
          ) : (
            <>
              <Link
                className="lg:px-4 text-red-500 header-link"
                onClick={handleLogOut}
              >
                Logout
              </Link>
            </>
          )}
        </div>

        <div className="dropdown dropdown-bottom lg:hidden block">
          <label className="text-2xl" tabIndex={0}>
            <span className="dropdown-icon">
              <HiMenuAlt1></HiMenuAlt1>
            </span>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32 px-4 py-2"
          >
            <Link className="text-red-500 header-link" to="/">
              Home
            </Link>
            <Link className="lg:px-4 text-red-500 header-link" to="/blogs">
              Blogs
            </Link>
            <Link to="/myreview" className="lg:px-4  text-red-500 header-link">
              My Reviews
            </Link>
            <Link to="/addservice" className="lg:px-4 text-red-500 header-link">
              Add Service
            </Link>
            {!user?.uid ? (
              <Link className="text-red-500 header-link" to="/login">
                Login
              </Link>
            ) : (
              <>
                <Link
                  className="lg:px-4  text-red-500 header-link"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="flex-none gap-2">
        {user?.uid && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.uid && <img src={user?.photoURL} alt="" />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-32"
            >
              <li>
                {user?.uid && (
                  <Link
                    className="lg:px-4 text-red-500 header-link"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
