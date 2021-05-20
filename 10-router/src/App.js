import { Redirect, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/welcome" />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products" exact={true}>
          <Products />
        </Route>

        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
