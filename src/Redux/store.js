// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Slice/Slice"

// export const store = configureStore({
//     reducer :{
//         cart : cartReducer
//     }
// })

// export default store

import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Slice/Slice"

export const store =configureStore({
    reducer :{
        cart : cartreducer
    }
})

export default store