import { createSlice, createSelector } from "@reduxjs/toolkit";

// Initialize state with the value from localStorage, or fallback to an empty array
const initialState ={
  cartInit  : localStorage.getItem('React') ? JSON.parse(localStorage.getItem('React')) : []
}


export const CartSlice = createSlice({
  name: "cart",
  //initialState: [], 
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.cartInit.push(action.payload); // Adds new items to the cart
      localStorage.setItem('React',JSON.stringify(state.cartInit))
    },
  },
});

// Create a selector to get the cart items from the state
export const getItemSelector = createSelector(
  (state) => state.cart, // The part of the state you need (cart items)
  (cart) => cart // Return the cart items
);

export const { addItems } = CartSlice.actions;

export default CartSlice.reducer;

