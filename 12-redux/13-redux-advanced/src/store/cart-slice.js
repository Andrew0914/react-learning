import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  cartIsVisible: false,
  notification: null,
  changed: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity = state.items.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        const index = state.items.indexOf(existingItem);
        state.items.splice(index, 1);
      }
      state.totalQuantity = state.items.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setCartItems(state, action) {
      state.items = action.payload.cartItems;
      state.totalQuantity = state.items.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
    },
  },
});

export default cartSlice;
