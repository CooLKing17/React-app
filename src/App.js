import { createBrowserRouter } from "react-router-dom"
import Routing from "./Routing"
import Error from "./Error"
import Body from "./components/Body"
import { SearchBtn } from "./components/Utilites/OwnHtmlTag"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Cart from "./components/Cart"

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
            {
                path:"/aboutus",
                element:<AboutUs />
            },
            {
                path:"/contactus",
                element:<ContactUs />
            },
            {
                path:"/signin",
                element:<Login />
            },
            {
                path:'/signup',
                element:<SignUp />
            },
            {
                path:"/cart",
                element:<Cart />
            }
           
        ]
    }
])

export default AppLayout