import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Andrew",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Daniela",
    text: "Learning React is great",
  },
];

export default function Quote() {
  const params = useParams();
  const route = useRouteMatch();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) return <div>No quote found!</div>;

  // el placeholder solo es para hacer match en <Route> para para ir a una ruta si debe ponerse el valor real
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={route.path} exact={true}>
        <div className="centered">
          <Link className="btn--flat" to={`${route.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${route.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
