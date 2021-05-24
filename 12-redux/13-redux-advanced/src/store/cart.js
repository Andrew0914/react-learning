import { createSlice } from "@reduxjs/toolkit";
import { FIREBASE_URL } from "../FIREBASE_SETTINGS";

const initialState = {
  items: [],
  totalQuantity: 0,
  cartIsVisible: false,
  notification: null,
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
  },
});

export const sendCartItemsData = (cartItems) => {
  return (dispatch) => {
    const sendCartItemsData = async () => {
      dispatch(
        cartSlice.actions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(`${FIREBASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        throw new Error("Something is wrong");
      }

      dispatch(
        cartSlice.actions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    sendCartItemsData().catch((error) => {
      dispatch(
        cartSlice.actions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  };
};

export default cartSlice;
