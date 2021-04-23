import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.expenses.length <= 0)
    return <p className="expenses-list__fallback">Not expeneses found</p>;

  return props.expenses.map((expense) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </ul>
  ));
}

export default ExpensesList;
