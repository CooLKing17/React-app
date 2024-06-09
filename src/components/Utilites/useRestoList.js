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
     " https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"
    );

    const json = await data.json();
    
    const list = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
    ?.restaurants;
    if(!list){
      const list = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants;

        // setFood(list);
        setRestoList(list)
        return list;
    }
    console.log(json)
        // setFood(list);
        setRestoList(list)
  }
  
  console.log("use");
  console.log(restoList)
  return restoList;
};

export default useRestoList;
