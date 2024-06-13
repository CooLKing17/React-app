import { list } from "postcss";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const useRestoList = () => {
  const [restoList, setRestoList] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
          //"https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"
          //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
    const json = await data.json();
    console.log(json   )
    //const list = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    const list = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants;
    console.log(list)
    if(!list){
      const list = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

        
        setRestoList(list)
        return list;
    }
    // console.log(json)
       
        setRestoList(list)
  }
  
  // console.log("use");
  // console.log(restoList)
  return restoList;
};

export default useRestoList;
