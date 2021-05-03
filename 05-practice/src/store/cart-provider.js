import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const getTotalAmount = (items) => {
  return items.reduce((total, item) => {
    return (total += item.price * item.amount);
  }, 0);
};

const updateItemAmount = (items, item, amount) => {
  const updatedItem = { ...item };
  updatedItem.amount += amount;
  const updatedIndex = items.findIndex((item) => item.id === updatedItem.id);
  return { updatedIndex, updatedItem };
};

const cartReducer = (state, action) => {
  let updatedItems = new Array(...state.items);
  const itemid = action.item ? action.item.id : action.id;
  const item = state.items.find((item) => item.id === itemid);
  switch (action.type) {
    case "ADD_ITEM":
      if (item) {
        const { updatedIndex, updatedItem } = updateItemAmount(
          updatedItems,
          item,
          action.item.amount
        );
        updatedItems.splice(updatedIndex, 1, updatedItem);
      } else {
        updatedItems = state.items.concat({ ...action.item });
      }
      return { items: updatedItems, totalAmount: getTotalAmount(updatedItems) };
    case "REMOVE_ITEM":
      if (item && item.amount > 1) {
        const { updatedIndex, updatedItem } = updateItemAmount(
          updatedItems,
          item,
          -1
        );
        updatedItems.splice(updatedIndex, 1, updatedItem);
      } else if (item && item.amount === 1) {
        const updatedIndex = updatedItems.findIndex((item) => {
          return item.id === action.id;
        });
        updatedItems.splice(updatedIndex, 1);
      }

      return { items: updatedItems, totalAmount: getTotalAmount(updatedItems) };
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
