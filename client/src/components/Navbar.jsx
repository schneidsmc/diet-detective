import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../utils/authContext";
import "./../App.css";
import logo from "../assets/DIETLOGO4.png";

const Navbar = ({ isLoggedIn }) => {
  const [nav, setNav] = useState(false);
  const currentPage = useLocation().pathname;
  const { isLoggedIn, logout } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gray-300 rounded-full h-[70px] dark:bg-gray-500 text-gray-400  max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold mt-2 text-white  ml-4 dark:text-gray-300">
        <img className="w-16 inline mb-2" src={logo} alt="logo" /> DIET
        <span className="text-black dark:text-gray-900">DETECTIVE</span>
      </h1>
      <ul className="hidden md:flex font-bold">
        <li className="p-5 hover:font-bold text-2xl navbar-shadow">
          <Link
            to="/"
            className={
              currentPage === "/"
                ? "nav-link active text-black dark:text-gray-100"
                : "nav-link"
            }
          >
            {" "}
            Home
          </Link>
        </li>

        {/* Conditionally render "MealPlan" link if user is logged in*/}
        {isLoggedIn && (
          <li className="p-5 hover:font-bold text-2xl navbar-shadow">
            <Link
              to="/MealPlan"
              className={
                currentPage === "/MealPlan"
                  ? "nav-link active text-black dark:text-gray-100"
                  : "nav-link"
              }
            >
              {" "}
              MealPlan
            </Link>
          </li>
          ///HELP HERE
        )}

        <li className="p-5 text-shadow hover:font-bold text-2xl">
          <Link
            to="/About"
            className={
              currentPage === "/About"
                ? "nav-link active text-black dark:text-gray-100"
                : "nav-link"
            }
          >
            {" "}
            About
          </Link>
        </li>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-400 navbar-shadow focus:text-black font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center pr-10"
          type="button"
        >
          <div className="text-4xl ">
            <CgProfile />
          </div>
        </button>
        <div
          id="dropdown"
          className="z-10 text-center hidden left-11 background-mine divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-white dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {/* Render "Logout" button if user is logged in */}
            {isLoggedIn ? (
              <li className="p-5 text-shadow hover:font-bold text-2x1">
                <button className="nav-link" onClick={logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="p-5 text-lg hover:text-gray-500 hover:text-xl options hover:font-bold">
                <Link
                  to="/Login"
                  className={
                    currentPage === "/Login"
                      ? "nav-link active text-black dark:text-gray-100"
                      : "nav-link"
                  }
                >
                  Login
                </Link>
              </li>
            )}
            <li className="p-5 text-lg hover:text-gray-500 hover:text-xl options hover:font-bold">
              <Link
                to="/Signup"
                className={
                  currentPage === "/Signup"
                    ? "nav-link active text-black dark:text-gray-100"
                    : "nav-link"
                }
              >
                Sign-up
              </Link>
            </li>
            <li className="p-5 text-lg hover:text-gray-500 hover:text-xl options hover:font-bold">
              <Link
                to="/Profile"
                className={
                  currentPage === "/Profile"
                    ? "nav-link active text-black dark:text-gray-100"
                    : "nav-link"
                }
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-lg font-bold text-white ml-4">
          <img className="w-16 inline mb-2" src={logo} alt="logo" /> DIET
          <span className="text-black">DETECTIVE</span>
        </h1>
        <ul className="p-8 text-2xl font-bold">
          <li className="p-2 text-shadow hover:font-bold">
            <Link
              to="/"
              className={
                currentPage === "/"
                  ? "nav-link active primary-color"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li className="p-2 text-shadow hover:font-bold">
              <Link
                to="/MealPlan"
                className={
                  currentPage === "/MealPlan"
                    ? "nav-link active primary-color"
                    : "nav-link"
                }
              >
                MealPlan
              </Link>
            </li>
          )}

          <li className="p-2 text-shadow hover:font-bold">
            <Link
              to="/About"
              className={
                currentPage === "/About"
                  ? "nav-link active primary-color"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="p-2 text-shadow hover:font-bold">
            <Link
              to="/Login"
              className={
                currentPage === "/Login"
                  ? "nav-link active primary-color"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li className="p-2 text-shadow hover:font-bold">
            <Link
              to="/Signup"
              className={
                currentPage === "/Signup"
                  ? "nav-link active primary-color"
                  : "nav-link"
              }
            >
              Sign-up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
