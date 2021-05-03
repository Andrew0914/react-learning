import classes from "./Cart.module.css";
import Modal from "../ui/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <Modal onResume={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {cartContext.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
