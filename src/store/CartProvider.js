// to manage the cart-context data 
// to provide that context to all components that want access to it

import React from "react";

import CartContext from "./cart-context";

const CartProvider = () => {

    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;

// {props.children} allows wrapping of any component that should get access to this context with 
// CartProvider component

// need to wrap all components with CartProvider that need access to the cart
// Cart, Header, Meals