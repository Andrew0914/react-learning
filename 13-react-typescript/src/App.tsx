import Todos from "./components/Todos";
import { Todo } from "./models/todo";

const items: Todo[] = [
  new Todo("Learn react"),
  new Todo("Learn something awesome"),
];
function App() {
  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
