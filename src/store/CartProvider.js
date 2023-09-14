// to manage the cart-context data 
// to provide that context to all components that want access to it

import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState ={
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    };
    return defaultCartState;
};

const CartProvider = props => {

    // second element function allows to dispatch an action to the reducer
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

// {props.children} allows wrapping of any component that should get access to this context with 
// CartProvider component

// need to wrap all components with CartProvider that need access to the cart
// Cart, Header, Meals