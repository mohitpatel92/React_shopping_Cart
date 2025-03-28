import { createSlice, createSelector } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getItemSelector = createSelector(
  (state) => state.cart,
  (state) => state
);
export const { addItems } = CartSlice.actions;

export default CartSlice.reducer;


