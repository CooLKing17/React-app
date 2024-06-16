import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCarouselData from './useCarouselData'
import Restocard from '../Restocard'
import Sim from './sim'

function FilterrMenu() {
    const id = useParams()
        const[oil, setOil]=useState()
    const filterData = useCarouselData(id)
    console.log(id)
    useEffect(()=>{
        setOil(filterData)

    },[filterData])

    console.log(oil)
    
  return (
        
    <div className="pt-14 mt-16 m-4">
     {oil &&
              oil.map((restaurant, index) => (
                
                <Sim key={index} {...restaurant.card.card.info}/>
                
                
              ))}
    
    FilterrMenu
    </div>
  )
}

export default FilterrMenu