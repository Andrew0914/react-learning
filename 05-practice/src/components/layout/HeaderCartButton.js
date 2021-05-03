import React, { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartAmountItems = cartContext.items.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartAmountItems}</span>
    </button>
  );
};

export default HeaderCartButton;
