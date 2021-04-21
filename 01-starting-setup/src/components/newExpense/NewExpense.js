import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseHandler = (expense) => {
    props.onAddExpense({ ...expense, id: Math.random() });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
