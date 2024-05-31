
import React from "react";
import ReactDOM from "react-dom/client"

// const root = document.getElementById("root")
// root.innerHTML="Avinash"

const root =React.createElement("h1",{},"Avinash");
const ro = ReactDOM.createRoot(document.getElementById("root"))
ro.render(root)