import { useState, useEffect, useContext ,useRef } from "react";
import useRestoList from "./Utilites/useRestoList";
import Shimmer from "./Shimmer";
import Restocard from "./Restocard";
import { SearchBtn } from "./Utilites/OwnHtmlTag";
import { SearchContext } from "./Context/SearchContext";
import { Link } from "react-router-dom";
const Body = () => {
  const [food, setFood] = useState();
  const [filteredData, setFilteredData] = useState();
  const data = useRestoList();// we can pass props 
  const [isTrue, setIstrue] = useState();
  const { search } = useContext(SearchContext);

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

  useEffect(() => {
    if (data) {
      setFood(data)
      setFilteredData(data);
     
    }
  }, [data]);


  return !food ? (
    <Shimmer />
  ) : (
    <div className="pt-12 mt-12">
      <div style={{display : search ? "none" : "block"}}>
      
          <div >
            {" "}
            <SearchBtn
              food={food}
              setFilteredData={setFilteredData}
              setIstrue={setIstrue}
              
            />
          </div>
        
      </div>{" "}
      {isTrue ? (
        <div className="pt-16 mt-16 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-semibold text-gray-700">
            Sorry, no items found.
          </h1>
          <p className="mt-4 text-gray-500">
            Please try a different search term.
          </p>
        </div>
      ) : (
        <div className="relative pt-4 mt-4 bg-slate-200 p-4">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="bg-slate-400 text-white w-10 h-32 rounded-full p-2 hover:bg-gray-600"
              onClick={scrollLeft}
            >
              &lt;
            </button>
          </div>
          <div
            className="flex overflow-x-auto scrollbar-hide space-x-4"
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
              className="bg-slate-400 text-white rounded-full p-2 w-10 h-32  hover:bg-gray-600"
              onClick={scrollRight}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default Body;
