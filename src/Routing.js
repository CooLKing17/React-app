import Shimmer from "./components/Shimmer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import { useState } from "react"
import SearchProviderContext from "./components/Context/SearchContext";

const Routing =()=>{
// const [isTrue,setIstrue] =useState(true);
// console.log(isTrue)
    return(
        <>
            <SearchProviderContext>
            <Header  />
            <Outlet />
            </SearchProviderContext>
            
        </>
    )
}

export default Routing;