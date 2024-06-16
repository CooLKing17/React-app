import { useEffect, useState } from "react"
import { CarouselLink1,CarouselLink2 } from "../Routing/Config";

const useCarouselData=({id})=>{
    const [oil,setOil]=useState()
console.log(id)
    useEffect(()=>{
        getDat();
    },[])

    async function getDat(){
        const data = await fetch(CarouselLink1+id+CarouselLink2)
        const response = await data.json();
        console.log(response)
        const result = response?.data?.cards
        setOil(result)
    }
    return oil;
}

export default useCarouselData;