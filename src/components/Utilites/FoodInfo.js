import { VEGIm,NONVEGIm,CDNMenuIm } from "../Routing/Config";
import { OwnBtn } from "./OwnHtmlTag";

const FoodInfo=(
    {
        itemAttribute={},
        name,
        price,
        defaultPrice,
        imageId,
        description
    }
)=>{
    return(
        <>
        <div
      
      className="flex justify-center items-center m-4 bg-slate-400 rounded-lg p-4 hover:bg-slate-200"
    >
      <div className="flex-1  text-black">
        <div className="flex  items-center mb-2">
          {itemAttribute?.vegClassifier ===
          "VEG" ? (
            <img
              className=" w-6 h-6 mr-2"
              src={VEGIm}
              alt="Veg"
            />
          ) : (
            <img
              className=" w-6 h-6 mr-2"
              src={NONVEGIm}
              alt="Non-Veg"
            />
          )}
          <h3 className="text-xl font-semibold">
            {name}
          </h3>
        </div>
        {(price )?<h5 className="text-lg mb-2">₹ {price / 100} </h5>:<h5 className="text-lg mb-2"> ₹ {defaultPrice / 100}</h5>}
        <p className="text-sm">
          {description}
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center p-2  rounded-lg">
        <img
          src={`${CDNMenuIm}${imageId}`}
          className="h-52 w-52 object-cover rounded-lg mb-2"
          alt={name}
        />
        <OwnBtn prop="ADD" />
      </div>
    </div>
        </>
    )

}

export default FoodInfo;