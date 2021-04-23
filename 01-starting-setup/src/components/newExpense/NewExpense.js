import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (expense) => {
    props.onAddExpense({ ...expense, id: Math.random() });
    setIsEditing(false);
  };

  const handleEditMode = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={handleEditMode}>Add new expense</button>
      ) : (
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
      )}
    </div>
  );
}

export default NewExpense;
