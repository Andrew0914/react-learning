import { Redirect, Route, Switch } from "react-router";
import { Layout } from "./components/layout/Layout";
import { AllQuotes } from "./pages/AllQuotes";
import { NewQuote } from "./pages/NewQuote";
import { Quote } from "./pages/Quote";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact={true}>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <Quote />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
