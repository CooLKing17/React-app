import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
// import { CDNLogoIm } from "./Routing/Config";
import LOGO from '../Assest/Img/Logo.png'
import { SearchContext } from "./Context/SearchContext";
const Title = () => (
  <div className=" flex justify-center items-center">
    <Link to="/">
      <img
        alt="Food Villa "
        src={LOGO}
        className="w-10 m-1 custom:w-24 md:w-20 sm:w-16 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
      />
    </Link>
    <Link to="/" className="text-3xl font-bold italic font-serif xm:hidden text-black hover:text-pink-500">
      Food Villa
    </Link>
  </div>
);

import React from "react";

const Header = () => {

  const {toggleTheme}=useContext(SearchContext)
  const [val, setVel] = useState(true);

  // const handleSearch = () => {
  //   console.log("in")
  //   setSearch(true)
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
   
  // }

  return (
    <div className=" fixed top-0 left-0 right-0 flex justify-between p-1 lg:h-20 bg-yellow-200 ">
      <Title />
      <div className=" flex  justify-end items-center my-2  m-1  p-1">
        <nav className="flex justify-between items-center">
          <ul className="flex lg:text-xl font-serif  mt-1  ">
          <li className="mr-2  md:mr-5 lg:mr-6 " >
            <Link to="/search" onClick={toggleTheme} className="text-black hover:text-pink-500 ">
              Search
            </Link>
          </li>
            <li
              className="mr-2  md:mr-5 lg:mr-6"
            >
              <Link to="/aboutus" className="text-black hover:text-pink-500">
                About
              </Link>
            </li>
            <li
              className="mr-2  md:mr-5 lg:mr-6"  >
              <Link to="/contactus" className="text-black hover:text-pink-500">
                Contact
              </Link>
            </li>
            <li
              className="mr-2 md:mr-5 lg:mr-6"
            >
              <Link to="/cart" className="text-black hover:text-pink-500">
                Cart
              </Link>
            </li>
            <li
              className="mr-2 md:mr-5 lg:mr-6"
            >
              {val ? (
                <Link to="/signin" className="text-black hover:text-pink-500"
                  
                  onClick={() => setVel(false)}
                >
                  SignIn
                </Link>
              ) : (
                <Link  to="/signup" className="text-black hover:text-pink-500"
                 
                  onClick={() => setVel(true)}
                >
                  SignUp
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
