import FoodInfo from "./FoodInfo";


const Menu =({
  prop
})=>{


  return (
    <>
    {prop?.map((items, index) => {

       return (
           <FoodInfo key={index} prop={items?.card?.info} /> 
        )
    })}</>
    
  );
}

export default Menu;