import Header from "./components/layout/Header"
import Meals from "./components/meals/Meals"
import Cart from "./components/cart/Cart";
import { useState } from "react";


function App() {
  const [cartIsShow, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
