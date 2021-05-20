import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import { ProductDetails } from "./components/ProductDeails";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/" exact={true}>
          <Welcome />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
