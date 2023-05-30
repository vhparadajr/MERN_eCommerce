import { createSlice } from "@reduxjs/toolkit";

import { updateCart } from "../utils/cartUtils";

const initialCart = localStorage.getItem("cart")
const initialState = initialCart ? JSON.parse(initialCart) : {cartItems: []};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex((x) => x._id === item._id);

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex] = item;
      } else {
        state.cartItems.push(item);
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;