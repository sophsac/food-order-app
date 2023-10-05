import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  // to always have $ 2dp as total amount
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // to check if cart has items, allow order button
  // render Order button if there's items in the cart
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // will trigger addItem function in CartProvider component
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  // order button clicked to show checkout form
  const orderHandler = () => {
    setIsCheckout(true);
  }

  // map all cartItems to JSX element
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* to transform items to items in the cart */}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // .bind ensures removal/addition is correct through id and whole item, respectively
          // pre-configures a function for future execution
          // pre-configures the argument that function will receive when it's being executed
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // if isCheckout(false), show close and order button
  const modalActions = 
    <div className={classes.action}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>
  ;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* closes whole cart tab through props.onClose of Close button if cancel button in checkout is clicked */}
      {isCheckout && <Checkout onCancel={props.onClose} />} 
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
