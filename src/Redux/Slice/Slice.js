import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  cartInit: localStorage.getItem("React")
    ? JSON.parse(localStorage.getItem("React"))
    : [],
};



export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.cartInit.push(action.payload); 
      console.log("add...", action.payload);
      localStorage.setItem("React", JSON.stringify(state.cartInit));
    },
    removeItem: (state, action) => {
      
      console.log("remove...", action.payload);
      state.cartInit = state.cartInit.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("React", JSON.stringify(state.cartInit));
    },
  },
});

export const getItemSelector = createSelector(
  (state) => state.cart,
  (cart) => cart
);

export const { addItems, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
