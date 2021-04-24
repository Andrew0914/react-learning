import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpenseItem(props) {
  return (
    // class is a reserved word for JS, so We need to use "className" ❕
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__amount">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
