

import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Slice/Slice"

export const store =configureStore({
    reducer :{
        cart : cartreducer
    }
})

export default store