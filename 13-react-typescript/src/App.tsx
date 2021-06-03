import Todos from "./components/Todos";
import { Todo } from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

const items: Todo[] = [
  new Todo("Learn react"),
  new Todo("Learn something awesome"),
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(items);

  const addTodoHandler = (todo: Todo) => {
    setTodos((prevTodos) => prevTodos.concat(todo));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
