import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  // header will be reevaluated when updated
  // updated in CartProvider component
  const cartCtx = useContext(CartContext);

  // .reduce() allows transformation of array into single value
  // takes 2 arguments
  const numOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* will wrap icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* will wrap text */}
      <span>Your Cart</span>
      {/* will wrap badge */}
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

// so the function received on onClick in headerCartButton is forwarded to
// the onClick prop on the button

// chain of props
// props.onClick in HeaderCartButton.js
// > props.onShow in Header.js
// > showCartHandler function in App.js
