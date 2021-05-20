import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
export function Quote() {
  const params = useParams();
  return (
    <div>
      <h1>Quote details</h1>
      {params.quoteId}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  );
}
