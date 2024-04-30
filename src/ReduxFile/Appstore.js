import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const Appstore=configureStore({
    reducer:{
       Cart:CartSlice
    }
})
export default Appstore