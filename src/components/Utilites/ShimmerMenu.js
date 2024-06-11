import { OwnBtn } from "./OwnHtmlTag";
import IMg from "../../Assest/Img/1.gif";
import { VEGIm, NONVEGIm } from "../Routing/Config";
import { ratingStar } from "./Logic";
const ShimmerMenu = () => {
  const ShimmerElement = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className=" p-4 rounded-lg mb-4">
      <div className="flex justify-center items-center m-4 bg-slate-400 rounded-lg p-4 hover:bg-slate-200">
        <div className="flex-1  text-black">
          <div className="flex  items-center mb-2">
            {"VEG" === "VEG" ? (
              <img className=" w-6 h-6 mr-2" src={VEGIm} alt="Veg" />
            ) : (
              <img className=" w-6 h-6 mr-2" src={NONVEGIm} alt="Non-Veg" />
            )}
            <h3 className="text-xl font-semibold">Name ...</h3>
          </div>
          <h5 className="text-lg mb-2">₹ ... </h5>
          <p className="text-sm">description ...</p>
        </div>
        <div className=" flex flex-col justify-center items-center p-2  rounded-lg">
          <img
            src={IMg}
            className="h-52 w-52 object-cover rounded-lg mb-2"
            alt="name"
          />
          <OwnBtn prop="ADD" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="pt-14 mt-16 m-4 p-4 font-serif">
        <div className="grid justify-items-center p-4">
          <div className="bg-amber-200 w-2/4  p-6 rounded-md shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300  ">
            <h1 className="text-xl font-bold ">Name ...</h1>
            <h3>5{ratingStar(5)}</h3>
            <h3>cuisines ...</h3>
          </div>
        </div>
        {ShimmerElement}
      </div>
    </>
  );
};

export default ShimmerMenu;