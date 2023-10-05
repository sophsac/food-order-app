// should only run/be seen when order button is clicked
// if isCheckout(true), show checkout form

import React from 'react';
// get values once form is submitted
import { useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = (props) => {

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        // gives access to actual value stored to the ref
        const enteredName = nameInputRef.current.value;
        const enteredStreet = postalInputRef.current.value;
        const enteredPostalCode = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
          </div>
          <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel </button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
      );
}

export default Checkout