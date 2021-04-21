import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "Car insurance", price: 100.1, date: new Date(2021, 4, 30) },
    { title: "Toilent paper", price: 90.45, date: new Date(2021, 7, 18) },
    { title: "Candies", price: 23.4, date: new Date(2021, 6, 1) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This also visible!</p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
