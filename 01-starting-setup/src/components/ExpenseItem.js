import "./ExpenseItem.css";
function ExpenseItem() {
  // only one root element ⚠️
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$284.63</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
