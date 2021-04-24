import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
