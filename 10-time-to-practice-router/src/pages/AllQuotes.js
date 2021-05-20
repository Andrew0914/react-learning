import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: "q1",
    authore: "Andrew",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    authore: "Daniela",
    text: "Learning React is great",
  },
];
export function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}
