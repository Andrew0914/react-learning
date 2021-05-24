import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartItemsData } from "./store/cart";

function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendCartItemsData(cartItems));
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
