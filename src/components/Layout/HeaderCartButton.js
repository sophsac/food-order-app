import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            {/* will wrap icon */}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            {/* will wrap text */}
            <span>Your Cart</span>
            {/* will wrap badge */}
            <span className={classes.badge}>3</span>
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