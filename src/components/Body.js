import { useState, useEffect, useContext ,useRef } from "react";
import useRestoList from "./Utilites/useRestoList";
import Shimmer from "./Shimmer";
import Restocard from "./Restocard";
import { SearchBtn } from "./Utilites/OwnHtmlTag";
import { SearchContext } from "./Context/SearchContext";
import { Link } from "react-router-dom";
import Carousel from "./Utilites/Carousel";
import FoodCantainer from "./Utilites/FoodCantainer";
const Body = () => {
  const [food, setFood] = useState();
  const [filteredData, setFilteredData] = useState();
  const [carousel,setcarousel]=useState()
  const data = useRestoList();// we can pass props 
  const [isTrue, setIstrue] = useState();
  const { search } = useContext(SearchContext);

  

 

  useEffect(() => {
    if (data) {
      console.log(data)
      setFood(data[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
      setFilteredData(data[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
      setcarousel(data[0]?.card?.card?.gridElements?.infoWithStyle
        ?.info)
     
    }
  }, [data]);

console.log(carousel)
  return !food ? (
    <Shimmer />
  ) : (
    <div className="pt-12 mt-12  ">
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
       <Carousel info={carousel}/>
       <FoodCantainer isTrue={isTrue} filteredData={filteredData}/>
      
    </div>
   
  );
};

export default Body;
