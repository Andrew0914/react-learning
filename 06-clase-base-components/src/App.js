import { useState } from "react";
import UserFinder from "./components/UserFinder";

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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <UserFinder />
    </div>
  );
}

export default App;
