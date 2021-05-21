<<<<<<< HEAD:01-starting-setup/src/App.js
import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "11a",
    title: "Car insurance",
    amount: 100.1,
    date: new Date(2020, 4, 30),
  },
  {
    id: "11b",
    title: "Toilent paper",
    amount: 90.45,
    date: new Date(2021, 7, 18),
  },
  { id: "11c", title: "Candies", amount: 23.4, date: new Date(2021, 6, 1) },
  { id: "11d", title: "McDonals", amount: 79.4, date: new Date(2019, 3, 26) },
];
=======
import Users from './components/Users';
>>>>>>> 🍊 Initial commit class components:06-clase-base-components/src/App.js

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
<<<<<<< HEAD:01-starting-setup/src/App.js
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
=======
      <Users />
>>>>>>> 🍊 Initial commit class components:06-clase-base-components/src/App.js
    </div>
  );
}

export default App;
