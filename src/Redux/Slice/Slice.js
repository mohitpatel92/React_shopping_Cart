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
      const item = action.payload;
      const existingItem = state.cartInit.find((e) => e.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartInit.push({ ...item, quantity: 1 });
      }

      // state.cartInit.push(action.payload);
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

    incrementQuntiry: (state, action) => {
      const item = state.cartInit.find((e) => e.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuntity: (state, action) => {
      const item = state.cartInit.find((e) => e.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const getItemSelector = createSelector(
  (state) => state.cart,
  (cart) => cart
);

export const { addItems, removeItem ,incrementQuntiry,decrementQuntity} = CartSlice.actions;

export default CartSlice.reducer;
