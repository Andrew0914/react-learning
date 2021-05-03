import React from "react";
import CartIcon from "../cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your cart
      </span>
      <span className={classes.badge}>
        0
      </span>
    </button>
  )
}

export default HeaderCartButton