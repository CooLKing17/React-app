import { useRef } from "react";
import { Link } from "react-router-dom";
import Restocard from "../Restocard";


const FoodCantainer =({isTrue,filteredData})=>{
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    };
  
    
  
    const scrollRight = () => {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    };
    return(
            <>
      {isTrue ? (
        <div className="pt-16 mt-16 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-semibold text-gray-700">
            Sorry, no items found.
          </h1>
          <p className="mt-4 text-gray-500 pb-6">
            Please try a different search term.
          </p>
        </div>
      ) : (
        <div className="relative flex flex-wrap pt-4 mt-4 bg-slate-200 p-4">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="bg-transparent border-2 border-black text-black hover:text-white text-3xl w-10 h-20 rounded-full hover:bg-gray-600"
              onClick={scrollLeft}
            >
              &lt;
            </button>
          </div>
          <div
            className="flex overflow-x-auto scrollbar-hide space-x-4 "
            ref={scrollContainerRef}
          >
            {filteredData &&
              filteredData.map((restaurant, index) => (
                <Link to={`/resto/${restaurant.info.id}`} key={index}>
                  <Restocard key={index} {...restaurant.info} />
                </Link>
              ))}
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="bg-transparent border-2 border-black text-black hover:text-white text-3xl w-10 h-20 rounded-full hover:bg-gray-600"
              onClick={scrollRight}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
      </>
    )

}

export default FoodCantainer;