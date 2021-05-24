import { cartActions } from "./index";
import { FIREBASE_URL } from "../FIREBASE_SETTINGS";

export const sendCartItemsData = (cartItems) => {
  return (dispatch) => {
    const sendCartItemsData = async () => {
      dispatch(
        cartActions.showNotification({
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
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    sendCartItemsData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  };
};

export const fetchCartItems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_URL}/cart.json`);

      if (!response.ok) {
        throw new Error("Cant fetch cart items");
      }
      const data = await response.json();

      dispatch(cartActions.setCartItems({ cartItems: data.cartItems || [] }));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Can not fetch cart items 🛒!",
        })
      );
    }
  };
};
