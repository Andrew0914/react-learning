import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = state.items.find((item) => item.id === action.item.id);
      let updatedItems = null;
      if (item) {
        const updatedItem = { ...item };
        updatedItem.amount += action.item.amount;
        updatedItems = new Array(state.items);
        const updatedIndex = updatedItems.findIndex(
          (item) => item.id === updatedItem.id
        );
        updatedItems.splice(updatedIndex, 1, updatedItem);
      } else {
        updatedItems = state.items.concat({ ...action.item });
      }

      const totalAmount = updatedItems.reduce((total, item) => {
        return (total += item.price * item.amount);
      }, 0);

      return { items: updatedItems, totalAmount };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const initialCartValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={initialCartValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
