import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = (props) => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem key={item.id} item={item} onRemoveTodo={ctx.removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
