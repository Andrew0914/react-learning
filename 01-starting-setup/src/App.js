import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car insurance", price: 100.1, date: new Date(2021, 4, 30) },
    { title: "Toilent paper", price: 90.45, date: new Date(2021, 7, 18) },
    { title: "Candies", price: 23.4, date: new Date(2021, 6, 1) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js 🕹", expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
