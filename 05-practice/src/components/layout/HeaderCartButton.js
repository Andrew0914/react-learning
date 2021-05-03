import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const cartContext = useContext(CartContext);
  const cartAmountItems = cartContext.items.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);

  useEffect(() => {
    if (cartContext.items.length > 0) setShowAnimation(true);
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [cartContext.items]);

  const buttonClasses = `${classes.button} ${
    showAnimation ? classes.bump : ""
  }`;

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartAmountItems}</span>
    </button>
  );
};

export default HeaderCartButton;
