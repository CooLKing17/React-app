import Img from "../Assest/Img/1.gif"
const Shimmer=()=>{
    const ShimmerElemet=Array.from({length:14},(_,index)=>(
        <div key={index} className="bg-pink-300 w-44 h-80 shimmer  justify-center items-center text-center m-4">
        <img src={Img} className=""/>
        <h1 className="text-white  mt-10">Loading ....</h1>
        <h3  className="text-white ">Loading ....</h3>
        <h3  className="text-white ">Loading ....</h3>
    </div> 
    )

    )
    return(
        <>
        <div className="flex flex-wrap justify-center items-center pt-16 mt-10" >
        {ShimmerElemet}
        </div>
        </>
    )
}

export default Shimmer;