import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  // Data
  const [year, setYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  //  Logic
  const expensesContent = () => {
    const expenses = props.items.filter(
      (expense) => year === "" || expense.date.getFullYear() === parseInt(year)
    );

    if (expenses.length <= 0) return <p>Not expeneses found</p>;

    return expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  };
  // Render
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={year} />
      </div>
      {expensesContent()}
    </Card>
  );
}

export default Expenses;
