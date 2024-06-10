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

  console.log(filteredData);
  console.log(isTrue);

  useEffect(() => {
    if (data) {
      setFood(data)
      setFilteredData(data);
     
    }
  }, [data]);


  return !food ? (
    <Shimmer />
  ) : (
    <div className="pt-16 mt-10">
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
        <div className="flex flex-wrap justify-center ">

          {filteredData &&
            filteredData.map((restaurant, index) => (
              <Link to={"/resto/"+restaurant.info.id} key={index}>
              <Restocard key={index} {...restaurant.info} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
