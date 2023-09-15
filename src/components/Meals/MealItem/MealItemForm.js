// form to put in MealItem.js to allow customers to add quantity of meals in cart

import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  // control whether the form is valid or not
  // [state snapshot, state updating func]
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef =useRef();

  const submitHandler = event => {
    // prevent page reloading
    event.preventDefault();

    // extract entered amount on form using refs
    // ref prop doesn't work with custom component, such as <Input>
    const enteredAmount = amountInputRef.current.value;
    // transform string number into number number
    const enteredAmountNum = +enteredAmount

    // if any of the below conditions is met, no execution of submitHandler func
    if (
      enteredAmount.trim().length === 0 || 
      enteredAmountNum < 1 || 
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return
    };

    props.onAddToCart(enteredAmountNum);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
