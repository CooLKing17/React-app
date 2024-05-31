import { createBrowserRouter } from "react-router-dom"
import Routing from "./Routing"

const AppLayout = createBrowserRouter([
    {
        path:"/",
        element:<Routing />
    }
])

export default AppLayout