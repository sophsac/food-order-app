import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // header will be reevaluated when updated
  // updated in CartProvider component
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  // .reduce() allows transformation of array into single value
  // takes 2 arguments
  const numOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // cleanup func - automatic 
    return () => {
      clearTimeout(timer);
    };

  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
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
