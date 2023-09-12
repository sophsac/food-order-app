import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return (
        <button className={classes.button}>
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