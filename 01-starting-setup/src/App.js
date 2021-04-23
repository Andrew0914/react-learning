import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1a",
    title: "Car insurance",
    amount: 100.1,
    date: new Date(2020, 4, 30),
  },
  {
    id: "1b",
    title: "Toilent paper",
    amount: 90.45,
    date: new Date(2021, 7, 18),
  },
  { id: "1c", title: "Candies", amount: 23.4, date: new Date(2021, 6, 1) },
  { id: "1d", title: "McDonals", amount: 79.4, date: new Date(2019, 3, 26) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
