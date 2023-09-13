import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    //dynamic content into template literal
    const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      {/* title of item and details from props, from AvailableMeals */}
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* form to allow users to enter amount of items/meals they want added to the cart */}
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
