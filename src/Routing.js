import Shimmer from "./components/Shimmer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import { useState } from "react"
import SearchProviderContext from "./components/Context/SearchContext";
import { Provider } from "react-redux";
import Store from "./components/Utilites/Store";
import Footer from "./components/Footer";
const Routing =()=>{
// const [isTrue,setIstrue] =useState(true);
// console.log(isTrue)
    return(
        <Provider store={Store}>
            <SearchProviderContext>
            <Header />
            <Outlet />
            <Footer />
            </SearchProviderContext>
            
        </Provider>
    )
}

export default Routing;