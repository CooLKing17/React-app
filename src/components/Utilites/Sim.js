const Sim = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    // costForTwo,
    aggregatedDiscountInfoV3 = {},
    areaName,
    sla = {}
}) => {
    console.log(name);
    console.log(cloudinaryImageId);
    console.log(avgRatingString);
    console.log(cuisines.join(", ")); // Join cuisines with a comma for better readability
    console.log(areaName);

    return (
        <div>
            <h1>{name}</h1>
            <img src={cloudinaryImageId} alt={name} />
            <p>Rating: {avgRatingString}</p>
            <p>Cuisines: {cuisines.join(", ")}</p>
            <p>Area: {areaName}</p>
        </div>
    );
};

export default Sim;
