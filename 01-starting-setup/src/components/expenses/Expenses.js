import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  // Data
  const [year, setYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  //  Logic

  const filteredExpenses = props.items.filter(
    (expense) => year === "" || expense.date.getFullYear() === parseInt(year)
  );

  // Render
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={year} />
      </div>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
