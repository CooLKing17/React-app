import { StarIm } from "../Routing/Config";

export const FilterData = (food, search,  setIstrue ) => {
  console.log("searching");

  if (!search) {
    console.log("no search query");
    setIstrue(false)
    console.log(food)
    return food; 
  }

  const filteredData = food.filter((item) =>
    item.info.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredData);
  if (filteredData.length === 0) {
    console.log("no data found");
    setIstrue(true);
  } else {
    setIstrue(false);
    return filteredData;
  }
  return filteredData;
};


export const ratingStar=(rating)=>{
  const stars=[];
  console.log("inn")
  console.log(rating)
  const num = parseInt(rating,10)
  console.log(num)
  for (let i=0 ; i< num ;i++){
      stars.push(<img key={i} src={StarIm} alt="star" className="inline-block w-4 h-4" /> )
  }
  return stars
}


import { addItem,clearCart,removeItem } from "./CartSilce";
export const handleData=(prop,dispatch)=>{
  
    console.log(prop)
    dispatch(addItem(prop))
  
}