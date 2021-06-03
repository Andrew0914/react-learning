import React, { useRef } from "react";
import { Todo } from "../models/todo";

interface INewTodoProps {
  onAddTodo(todo: Todo): void;
}

const NewTodo: React.FC<INewTodoProps> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // ! is to tell typescript we are sure that we can have a value and is not going to be undefined or null (? sing tells that it can be null)
    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length === 0) return;
    const todo = new Todo(enteredText);
    props.onAddTodo(todo);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add +</button>
    </form>
  );
};

export default NewTodo;
