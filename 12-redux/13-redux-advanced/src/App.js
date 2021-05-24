import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { FIREBASE_URL } from "./FIREBASE_SETTINGS";
import Notification from "./components/UI/Notification";
import { cartActions } from "./store";

function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();
  useEffect(() => {
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
  }, [cartItems, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
