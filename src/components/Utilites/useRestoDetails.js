import { useEffect } from "react"
import { useState } from "react";
import { CDNRestoIm1,CDNRestoIm2 } from "../Routing/Config";
const useRestoDetails =({id})=>{
    const [restoDetails,setRestoDetails]=useState({});
    console.log(id);
    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const data = await fetch(CDNRestoIm1+id+CDNRestoIm2);
        const response = await data.json();
        // console.log(response)
        setRestoDetails(response);
    }
    return restoDetails
}

export default useRestoDetails;