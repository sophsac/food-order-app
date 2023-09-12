import React, { Fragment } from "react";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = props => {
    return (
        <button>
            {/* will wrap icon */}
            <span>
                <CartIcon />
            </span>
            {/* will wrap text */}
            <span></span>
            {/* will wrap badge */}
            <span></span>
        </button>

    );
};

export default HeaderCartButton;