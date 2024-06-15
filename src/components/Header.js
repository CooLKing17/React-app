import React, { useState, useContext, useRef } from "react";
import {
  CDNSearchImg,
  CDNContactIMg,
  CDNEmptycart,
  CDNFullCart,
  CDNaboutus,
  CDNprofile,
  CDNsignIn,
  CDNSignUp,
} from "./Routing/Config";
import { Link } from "react-router-dom";
import LOGO from "../Assest/Img/Logo.png";
import { SearchContext } from "./Context/SearchContext";
import { useSelector } from "react-redux";

const Title = () => (
  <div className=" flex justify-center items-center">
    <Link to="/">
      <img
        alt="Food Villa "
        src={LOGO}
        className="w-10 m-1 custom:w-24 md:w-20 sm:w-16 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
      />
    </Link>
    <Link
      to="/"
      className="text-3xl font-bold italic font-serif xm:hidden text-black hover:text-pink-500"
    >
      Food Villa
    </Link>
  </div>
);

import React from "react";

const Header = () => {
  const { toggleTheme } = useContext(SearchContext);
  const [val, setVel] = useState(true);
  const cartItem = useSelector((Store) => Store.cart.items);
  return (
    <div className=" fixed top-0 left-0 right-0 flex justify-between p-1 lg:h-20 bg-yellow-200 ">
      <Title />
      <div className=" flex  justify-end items-center my-2  m-1  p-1">
        <nav className="flex justify-between items-center">
          <ul className="flex lg:text-xl font-serif  mt-1  ">
            <li className="mr-2  md:mr-5 lg:mr-6 ">
              <Link
                to="/search"
                onClick={toggleTheme}
                className="text-black hover:text-pink-500 "
              >
                <img
                  className="w-8 m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  src={CDNSearchImg}
                />
              </Link>
            </li>
            <li className="mr-2  md:mr-5 lg:mr-6">
              <Link to="/aboutus" className="text-black hover:text-pink-500">
                <img
                  className="w-8 m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  src={CDNaboutus}
                />
              </Link>
            </li>
            <li className="mr-2  md:mr-5 lg:mr-6">
              <Link to="/contactus" className="text-black hover:text-pink-500">
                <img
                  className="w-8 m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  src={CDNContactIMg}
                />
              </Link>
            </li>
            <li className="mr-2 md:mr-5 lg:mr-6">
              <Link to="/cart" className="text-black hover:text-pink-500">
                {cartItem.length ? (
                  <img
                    className="w-8  m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src={CDNFullCart} 
                  />
                  
                ) : (
                  <img
                    className="w-8 m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src={CDNEmptycart}
                  />
                )}
              </Link>
            </li>
            <li className="mr-2 md:mr-5 lg:mr-6">
              {val ? (
                <Link
                  to="/signin"
                  className="text-black hover:text-pink-500"
                  onClick={() => setVel(false)}
                >
                  <img
                    className="w-8 m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src={CDNsignIn}
                  />
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="text-black hover:text-pink-500"
                  onClick={() => setVel(true)}
                >
                  <img
                    className="w-8  m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    src={CDNSignUp}
                  />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
