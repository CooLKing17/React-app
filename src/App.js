import { createBrowserRouter } from "react-router-dom"
import Routing from "./Routing"
import Error from "./Error"
import Body from "./components/Body"
import { SearchBtn } from "./components/Utilites/OwnHtmlTag"

const AppLayout = createBrowserRouter(
    

    [
    {
        path:"/",
        element:<Routing />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />,
                children:[
                    {
                        path:"/search",
                        element:<SearchBtn />
                    },
                ]
            },
           
        ]
    }
])

export default AppLayout