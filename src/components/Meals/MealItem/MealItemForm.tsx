import { FormEvent, ReactNode, useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

type MealItemFormProps = {
  children?: ReactNode;
  id: string;
  onAddItemToCart: (quantity: number) => void;
};

const formAttributes = {
  type: "number",
  min: "1",
  max: "5",
  steps: "1",
  defaultValue: "1",
};

function MealItemForm({ id, onAddItemToCart }: MealItemFormProps) {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef<any>();

  const addItemToCartHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredQuantity = Number(quantityInputRef.current.value.trim());

    if (enteredQuantity < 1 || enteredQuantity > 5) {
      setQuantityIsValid(false);
      return;
    }

    onAddItemToCart(enteredQuantity);
  };

  return (
    <form onSubmit={addItemToCartHandler} className={classes["form"]}>
      <Input
        ref={quantityInputRef}
        label="Amount"
        id={id}
        attr={formAttributes}
      />
      <button>+ Add</button>
      {!quantityIsValid && <p>Please enter valid</p>}
    </form>
  );
}

export default MealItemForm;
