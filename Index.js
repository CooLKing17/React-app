import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./src/App";


const root =React.createElement("h1",{},"Avinash");
const ro = ReactDOM.createRoot(document.getElementById("root"))
ro.render(
       <>
        <RouterProvider router={AppLayout}/>
       </>
)