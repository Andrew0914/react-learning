import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const initialCartValues = {
    iitems: [],
    totalAmout: 0,
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
