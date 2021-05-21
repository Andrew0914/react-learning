import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
export function NewQuote() {
  const history = useHistory();
  const addQuoteHandler = (quote) => {
    console.log(quote);
    history.push("/quotes");
  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}
