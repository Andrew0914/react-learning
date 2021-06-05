import React from "react";
import { Todo } from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  const clickHandler = () => {
    props.onRemoveTodo(props.item.id);
  };
  return (
    <li className={classes.item} onClick={clickHandler}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
