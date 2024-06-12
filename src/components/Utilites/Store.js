import { configureStore } from "@reduxjs/toolkit";
import CartSilce from "./CartSilce";

const Store = configureStore({
    reducer:{
        cart:CartSilce
    }

});

export default Store;