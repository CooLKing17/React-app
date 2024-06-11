import { CDNImageLink } from "./Routing/Config";

const Restocard=({
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    // costForTwo,
    aggregatedDiscountInfoV3 = {},
    areaName,
    sla ={}
  }) => {
    const header=aggregatedDiscountInfoV3.header;
    const subHeader=aggregatedDiscountInfoV3.subHeader;

    return (
      <div className="w-60 h-80 flex flex-col justify-between items-center text-center m-2 p-4 rounded-lg transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300">
      <img
        src={CDNImageLink + cloudinaryImageId}
        className="w-full h-32 object-cover rounded-t-lg"
        alt={name}
      />
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <h2 className="text-lg font-bold">
          {header} {subHeader}
        </h2>
        <h2 className="font-bold text-lg mt-2 w-full truncate">{name}</h2>
        <h3 className="text-sm text-gray-600 mt-1">
          {avgRatingString} star, {sla.slaString}
        </h3>
        <h3 className="text-sm text-gray-700 w-full truncate">
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-sm text-gray-600 mt-1">{areaName}</h4>
      </div>
    </div>   );
  };


export default Restocard;