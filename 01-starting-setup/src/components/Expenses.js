import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      />
    </div>
  );
}

export default Expenses;
