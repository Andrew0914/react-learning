import { useLocation, useHistory } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
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

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

export default function AllQuotes() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get("sort") === "asc";

  const history = useHistory();
  const handleOrder = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscending ? "desc" : "asc"}`,
    });
  };
  return (
    <div>
      <button className="btn--flat" onClick={handleOrder}>
        Order {isAscending ? "Desc" : "Asc"}
      </button>
      <hr />
      <QuoteList quotes={sortQuotes(DUMMY_QUOTES, isAscending)} />
    </div>
  );
}
