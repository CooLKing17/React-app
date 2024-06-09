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
