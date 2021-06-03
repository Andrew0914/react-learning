import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartItemsData, fetchCartItems } from "./store/cart-thunks";

let isInitial = true;
function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);
  const changed = useSelector((state) => state.cart.changed);
  const dispatch = useDispatch();

  // fetch cart items 🛒
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  // send item
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) {
      dispatch(sendCartItemsData(cartItems));
    }
  }, [cartItems, dispatch, changed]);

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
