import React from "react";
import { Todo } from "../models/todo";

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  return <li>{props.item.text}</li>;
};

export default TodoItem;
