import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // function in events must be pointend and not executed
  const handleClick = () => {
    setTitle("Updated!");
  };
  return (
    // class is a reserved word for JS, so We need to use "className" ❕
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={handleClick}>Click me!</button>
    </Card>
  );
}

export default ExpenseItem;
