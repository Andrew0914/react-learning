import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // only one root element ⚠️
  return (
    // class is a reserved word for JS, so We need to use "className" ❕
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
