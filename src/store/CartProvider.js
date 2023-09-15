// to manage the cart-context data
// to provide that context to all components that want access to it

import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {

    // for adding an item to the cart
    if (action.type === "ADD") {
        // to check if the item is already in the cart
        const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
        );
        // accesses the index if it exists
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.totalAmount;
        let updatedItems;

        if (existingItem) {
            // if there is an item in the cart, then update that num of item and amount by what's been added
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            // old item is overridden by updatedItem
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // or .concat/added to the cart
            updatedItems = state.items.concat(action.item);
        }

        return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        };
    }

    // for removing an item from the cart
    if (action.type === 'REMOVE') {
        // to check if the item is already in the cart
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        // accesses the index if it exists
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    
    return defaultCartState;
};

const CartProvider = (props) => {
    // second element function allows to dispatch an action to the reducer
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
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
