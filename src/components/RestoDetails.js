import { Link, useParams } from "react-router-dom";
import useRestoDetails from "./Utilites/useRestoDetails";
import { useEffect, useState } from "react";
import {
  PercentageIm,
  CDNMenuIm,
  VEGIm,
  NONVEGIm,
  StarIm,
} from "./Routing/Config";
import { ratingStar } from "./Utilites/Logic";
import Menu from "./Utilites/Menu";
import ShimmerMenu from "./Utilites/ShimmerMenu";
const RestoDetails = () => {
  const [restoInfo, setRestoinfo] = useState();
  const [restoMenu, setRestomenu] = useState();
  // const [item,setItem] =useState();
  const id = useParams();
  const data = useRestoDetails(id);
  console.log(data);

  useEffect(() => {
    setRestoinfo(data?.data?.cards[2]?.card?.card?.info);
    setRestomenu(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }, [data]);

  return (
    <>
      {!restoInfo ? (
        <ShimmerMenu />
      ) : (
        <div className="pt-14 mt-16 m-4 p-4 font-serif">
          <div className="p-4 ">
            <Link className="hover:text-fuchsia-500" to="/">
              Home /
            </Link>
            <Link className="hover:text-fuchsia-500" to="">
              {" "}
              {restoInfo.city} /
            </Link>
            <Link className="hover:text-fuchsia-500" to="">
              {" "}
              {restoInfo?.name}
            </Link>
          </div>
          <div className="grid justify-items-center p-4">
            <div className="bg-amber-200 w-2/4  p-6 rounded-md shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300  ">
              <h1 className="text-xl font-bold ">{restoInfo?.name}</h1>
              <h3>
                {restoInfo?.avgRatingString}
                {ratingStar(restoInfo?.avgRatingString)}(
                {restoInfo?.totalRatingsString})
              </h3>
              <h3>{restoInfo.cuisines.join(", ")}</h3>
            </div>
          </div>
          <div className=" grid justify-items-center p-4 ">
            <h3 className="text-lg font-bold">Deals for you</h3>
            <div
              key={1}
              className=" w-2/4 flex justify-center items-center  m-4"
            >
              {restoInfo.aggregatedDiscountInfo.descriptionList.map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="m-4 bg-amber-200 p-4 shadow-2xl flex items-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 "
                    >
                      <img
                        src={PercentageIm}
                        className="w-10 mr-2"
                        alt="percentage icon"
                      />
                      <h4>{item?.meta}</h4>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {restoMenu?.map((item, index) => {
           
            return (
              <div key={index} className=" p-4 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-black mb-4 ">
                  {item?.card?.card?.title}
                </h3>
                
                {item?.card?.card?.itemCards ? (
                  <Menu key={index} prop={item?.card?.card?.itemCards} />
                ) : (
                  <>
                    {item?.card?.card?.categories?.map((item, index) => {
                     
                      return <Menu key={index} prop={item?.itemCards} />;
                    })}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default RestoDetails;
