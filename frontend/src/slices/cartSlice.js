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
      const existItem = state.cartItems.find((x) => x._id === item._id);
      
      !!existItem 
        ? state.cartItems.map((x) => x._id === existItem._id ? item : x) 
        : state.cartItems = [...state.cartItems, item];
      return updateCart(state)
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;