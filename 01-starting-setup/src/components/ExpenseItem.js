import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 3, 20);
  const expenseTitle = "Car insurance";
  const expensePrice = 284.63;
  // only one root element ⚠️
  return (
    // class is a reserved word for JS, so We need to use "className" ❕
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
