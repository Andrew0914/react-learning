import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("From Expenses.js", selectedYear);
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={year} />
      </div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
