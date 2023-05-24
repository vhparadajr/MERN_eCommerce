import { createSlice } from "@reduxjs/toolkit";

const initialCart = localStorage.getItem("cart")
const initialState = initialCart ? JSON.parse(initialCart) : {cartItems: []};

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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
      
      //Calculate total price
      state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
      //Calculate shipping price
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
      //Calculate tax price
      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
      //Calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) + 
        Number(state.shippingPrice) + 
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;