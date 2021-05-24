import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FIREBASE_URL } from "./FIREBASE_SETTINGS";
function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch(`${FIREBASE_URL}/cart.json`, {
      method: "PUT",
      body: JSON.stringify({ cartItems }),
    });
  }, [cartItems]);
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
