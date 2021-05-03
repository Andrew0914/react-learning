import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const item = { id: props.id, name: props.name, price: props.price };
  const addToCartHandler = (amount) => {
    cartContext.addItem({ ...item, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={classes.description}> {props.description} </div>
        <div className={classes.price}> {price} </div>
      </div>
      <div>
        <MealItemForm
          id={`amount_${props.id}`}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
