import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expensess = [
    { title: "Car insurance", price: 100.1, date: new Date(2021, 4, 30) },
    { title: "Toilent paper", price: 90.45, date: new Date(2021, 7, 18) },
    { title: "Candies", price: 23.4, date: new Date(2021, 6, 1) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This also visible!</p>
      <ExpenseItem
        title={expensess[0].title}
        price={expensess[0].price}
        date={expensess[0].date}
      />
      <ExpenseItem
        title={expensess[1].title}
        price={expensess[1].price}
        date={expensess[1].date}
      />
      <ExpenseItem
        title={expensess[2].title}
        price={expensess[2].price}
        date={expensess[2].date}
      />
    </div>
  );
}

export default App;
