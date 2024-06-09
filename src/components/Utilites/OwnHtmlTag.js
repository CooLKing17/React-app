import {FilterData} from "./Logic"
import { useState } from "react"

export const OwnBtn=({onClick,prop})=>{
   
    console.log("inside btn")
    return(<button className="bg-orange-200 rounded-xl  sm:w-20 sm:h-10 md:w-20 md:h-10    " onClick={onClick}  >{prop}</button>)
}

export const SearchBtn=({food,setFilteredData,setIstrue })=>{
  const [search, setSearch] = useState('');

   return(
     <div className="m-2 justify-center items-center flex ">
    <input
    className="border-2 p-1 mx-2 rounded-md"
      placeholder="I Want"
      type="text"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    <OwnBtn onClick={()=>{const filtered = FilterData(food, search,setIstrue);
        setFilteredData(filtered);}} prop="Search" />
  </div>
  )
}