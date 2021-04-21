import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // This is another approach to handel state
  /*const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  // This is tricky because since state does not guarantee updating syncronous ❌
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
    // This is the best way to handle state as objectm because tou can guarantee de previous update ✅∫
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };*/
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    setAmount("");
    setTitle("");
    setDate("");
    props.onSaveExpense(expenseData);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
