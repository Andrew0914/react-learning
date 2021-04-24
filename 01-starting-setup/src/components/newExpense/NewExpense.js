import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  // Logic
  const saveExpenseHandler = (expense) => {
    props.onAddExpense({ ...expense, id: Math.random() });
    setIsEditing(false);
  };

  const handleEditMode = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={handleEditMode}>Add new expense</button>
      ) : (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
