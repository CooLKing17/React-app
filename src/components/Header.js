import React from "react";
import { Link } from "react-router-dom";
import { CDNLogoIm } from "./Routing/Config";

const Title = () => (
    <div >
      <Link to="/">
        <img alt="Food Villa " src={CDNLogoIm} className="h-28 m-2 "/>
      </Link>
    </div>
  );


const Header=()=>{
    return(
        
    <div className="flex justify-between items-center p-4 bg-gray-100 ">
      <Title />
      <ul className="flex m-10 pt-3 space-x-4 ">
        <li className="flex items-center">
          <input className="px-4 py-2 border rounded-lg mr-2"
            placeholder="I want"
            // value={serachText}
            // onChange={(e) => {
            //   setSearchText(e.target.value);
            // }}
          />
          <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            // onClick={() => {
            //   const ffood=filterFood(serachText,allresto);
            //   // console.log(data.name)
            //   setFoodName(ffood)
            // }}
          >
            Serach{" "}
          </button>
        </li>
        <li>
          <Link to="/">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/contactus">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Contant US</button>
          </Link>
        </li>
        <li>
          <Link to="/aboutus">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">About Us</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Cart</button>
          </Link>
        </li>
        <li>
          {/* {Val ? (
            <button onClick={() => setVal(false)}>Sign In</button>
          ) : (
            <button onClick={() => setVal(true)}>Sign Out</button>
          )} */}
        </li>
      </ul>
    </div>
    
    );
}

export default Header;