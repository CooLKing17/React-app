import { Link, useParams } from "react-router-dom";
import useRestoDetails from "./Utilites/useRestoDetails";
import { useEffect, useState } from "react";
import { PercentageIm, CDNMenuIm, VEGIm, NONVEGIm ,StarIm} from "./Routing/Config";
import { OwnBtn } from "./Utilites/OwnHtmlTag";
import { ratingStar } from "./Utilites/Logic";
const RestoDetails = () => {
  const [restoInfo, setRestoinfo] = useState();
  const [restoMenu, setRestomenu] = useState();
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
        <h1 className="pt-14 mt-10">Loading...</h1>
      ) : (
        <div className="pt-14 mt-16 m-4 p-4 font-serif">
          <div className="p-4 ">
            <Link className="hover:text-fuchsia-500" to="/">Home /</Link>
            <Link className="hover:text-fuchsia-500"  to=""> {restoInfo.city} /</Link>
            <Link className="hover:text-fuchsia-500"  to=""> {restoInfo?.name}</Link>
            </div>
            <div className="grid justify-items-center p-4">
            <div className="bg-amber-200 w-2/4  p-6 rounded-md shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300  ">
            
            <h1 className="text-xl font-bold ">{restoInfo?.name}</h1>
              <h3>
                {restoInfo?.avgRatingString}{ratingStar(restoInfo?.avgRatingString)}
                    ({restoInfo?.totalRatingsString})
              </h3>
              <h3>{restoInfo.cuisines.join(", ")}</h3>
              </div>
              </div>
              <div className=" grid justify-items-center p-4 ">

              <h3 className="text-lg font-bold">Deals for you</h3>
              <div className=" w-2/4 flex justify-center items-center flex-wrap m-4">

              {restoInfo.aggregatedDiscountInfo.descriptionList.map((item) => {
                return (
                    <div className="m-4 bg-amber-200 p-4 shadow-2xl flex items-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 ">
                        <img src={PercentageIm} className="w-10 mr-2" alt="percentage icon" />
                        <h4>{item?.meta}</h4>
                    </div>

                );
              })}
            </div>
            </div>
          {restoMenu?.map((item, index) => {
            console.log(item);
            return (
              <div key={index} className="bg-slate-500">
                <h3 key={index}>{item?.card?.card?.title}</h3>
                {item?.card?.card?.itemCards?.map((items, index) => {
                  console.log(items);
                  return (
                    <>
                      <div key={index} className="bg-purple-500">
                        <div key={index} className="bg-pink-400">
                          <img src={CDNMenuIm + items?.card?.info?.imageId} />
                          <OwnBtn prop="ADD" />
                        </div>
                        {items?.card?.info?.itemAttribute?.vegClassifier ===
                        "VEG" ? (
                          <img className="bg-slate-700 w-6 m-2" src={VEGIm} />
                        ) : (
                          <img className="bg-slate-700 w-6 m-2" src={NONVEGIm} />
                        )}
                        <h3>{items?.card?.info?.name}</h3>
                        <h5>{items?.card?.info?.defaultPrice / 100}</h5>
                        <p>{items?.card?.info?.description}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default RestoDetails;
