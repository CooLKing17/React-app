import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CDNLogoIm } from "./Routing/Config";

const Title = () => (
  <div className=" flex justify-center items-center">
    <Link to="/">
      <img
        alt="Food Villa "
        src={CDNLogoIm}
        className="w-10 m-1 custom:w-24 md:w-20 sm:w-16 rounded-xl"
      />
    </Link>
    <h2 className="text-3xl font-bold italic font-serif">Food Villa</h2>
  </div>
);

import React from "react";

const Header = () => {
  const [val, setVel] = useState(true);
  return (
    <div className=" flex justify-between p-2 bg-yellow-200 ">
      <Title />
      <div className=" flex  justify-end items-center my-2  m-1  p-1">
        <nav className="flex justify-between items-center">
          <ul className="flex lg:text-3xl mt-1  ">
            <li
              className="mr-2
 md:mr-5 lg:mr-6 
 "
            >
              <a href="#" className="text-black hover:text-red-300">
                <button className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-32 lg:h-10 font-serif">
                  Home
                </button>
              </a>
            </li>
            <li
              className="mr-2
 md:mr-5 lg:mr-6
 "
            >
              <a href="#" className="text-black hover:text-red-300">
                <button className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-32 lg:h-10 font-serif">
                  About
                </button>
              </a>
            </li>
            <li
              className="mr-2
 md:mr-5 lg:mr-6

"
            >
              <a href="#" className="text-black hover:text-red-300">
                <button className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-40 lg:h-10 font-serif">
                  Contact
                </button>
              </a>
            </li>
            <li
              className="mr-2
 md:mr-5 lg:mr-6

"
            >
              <a href="#" className="text-black hover:text-red-300">
                <button className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-30 lg:h-10 font-serif">
                  Cart
                </button>
              </a>
            </li>
            <li
              className="mr-2
 md:mr-5 lg:mr-6
"
            >
              {val ? (
                <button
                  className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-36 lg:h-10 font-serif"
                  onClick={() => setVel(false)}
                >
                  SignIn
                </button>
              ) : (
                <button
                  className="bg-orange-200 rounded-xl   sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-36 lg:h-10 font-serif"
                  onClick={() => setVel(true)}
                >
                  SignUp
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
