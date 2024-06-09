import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { CDNLogoIm } from "./Routing/Config";
import { SearchContext } from "./Context/SearchContext";
const Title = () => (
  <div className=" flex justify-center items-center">
    <Link to="/">
      <img
        alt="Food Villa "
        src={CDNLogoIm}
        className="w-10 m-1 custom:w-24 md:w-20 sm:w-16 rounded-xl transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 "
      />
    </Link>
    <h2 className="text-3xl font-bold italic font-serif xm:hidden">
      Food Villa
    </h2>
  </div>
);

import React from "react";

const Header = () => {

  const {setSearch}=useContext(SearchContext)
  const [val, setVel] = useState(true);

  const handleSearch = () => {
    console.log("in")
    setSearch(true)
   
  }

  return (
    <div className=" fixed top-0 left-0 right-0 flex justify-between p-2 bg-yellow-200 ">
      <Title />
      <div className=" flex  justify-end items-center my-2  m-1  p-1">
        <nav className="flex justify-between items-center">
          <ul className="flex lg:text-xl font-serif  mt-1  ">
          <li className="mr-2  md:mr-5 lg:mr-6 ">
            <Link to="/search" onClick={handleSearch} className="text-black hover:text-red-300 ">
              Search
            </Link>
          </li>
            <li
              className="mr-2  md:mr-5 lg:mr-6"
            >
              <Link to="/" className="text-black hover:text-red-300">
                About
              </Link>
            </li>
            <li
              className="mr-2  md:mr-5 lg:mr-6"  >
              <Link to="/" className="text-black hover:text-red-300">
                Contact
              </Link>
            </li>
            <li
              className="mr-2 md:mr-5 lg:mr-6"
            >
              <Link to="/" className="text-black hover:text-red-300">
                Cart
              </Link>
            </li>
            <li
              className="mr-2 md:mr-5 lg:mr-6"
            >
              {val ? (
                <button
                  className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-22 lg:h-10 "
                  onClick={() => setVel(false)}
                >
                  <p className=" hover:border-red-700 ">SignIn</p>
                </button>
              ) : (
                <button
                  className="bg-orange-200 rounded-xl    sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-36 lg:h-10 "
                  onClick={() => setVel(true)}
                >
                  <p className=" hover:border-red-700 ">SignUp</p>
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
