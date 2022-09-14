import { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let quantity = quantityInputRef.current.value.trim();
    quantity = +quantity;
    console.log(quantity);

    if (0 >= quantity || quantity > 5) {
      setQuantityIsValid(false);
      return;
    }

    setQuantityIsValid(true);
    props.onAddToCart(quantity);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
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
      {!quantityIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
