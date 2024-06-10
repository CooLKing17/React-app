import { useParams } from "react-router-dom";
import useRestoDetails from "./Utilites/useRestoDetails";
const RestoDetails =()=>{
    const id = useParams();
    const data = useRestoDetails(id)
    // console.log(data)




    return(
        <>
            <h1 className="pt-14 mt-10">Resto Details</h1>
        </>
    )
}
export default RestoDetails;