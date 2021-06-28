import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleChanges = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChanges = (e) => {
    setAmount(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngridient({ title, amount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={handleTitleChanges}
              value={title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              onChange={handleAmountChanges}
              value={amount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
