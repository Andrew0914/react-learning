import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../ui/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const amount = parseInt(amountRef.current.value.trim());
    if (amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          type: "number",
          id: props.id,
          min: "1",
          max: "5",
          stepValue: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add +</button>
      {!amountIsValid && <p>Set valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
