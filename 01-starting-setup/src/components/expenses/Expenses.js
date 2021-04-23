import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterByYear = (expense) =>
    year === "" || expense.date.getFullYear() === parseInt(year);

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={year} />
      </div>
      {props.items.filter(filterByYear).map((expense) => (
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
