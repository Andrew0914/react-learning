import React, { useContext, useRef } from "react";
import { Todo } from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = (props) => {
  const ctx = useContext(TodosContext);

  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // ! is to tell typescript we are sure that we can have a value and is not going to be undefined or null (? sing tells that it can be null)
    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length === 0) return;
    const todo = new Todo(enteredText);
    ctx.addTodo(todo);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add +</button>
    </form>
  );
};

export default NewTodo;
