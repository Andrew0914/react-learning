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
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      />
    </Card>
  );
}

export default Expenses;
