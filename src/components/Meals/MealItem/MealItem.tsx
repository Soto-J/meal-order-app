import { ReactNode, useContext } from "react";
import CartContext, { Item } from "../../../store/context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

type MealItemProps = {
  meal: Item;
  children?: ReactNode;
};

function MealItem({ meal }: MealItemProps) {
  const { id, name, description, price } = meal;
  const cartContext = useContext(CartContext);

  const addItemToCart = (quantity: number) => {
    cartContext.addItemToCart!({ ...meal, quantity });
  };

  return (
    <div className={classes["meal"]}>
      <div>
        <h3>{name}</h3>
        <div className={classes["description"]}>{description}</div>
        <div className={classes["price"]}>{`$${price.toFixed(2)}`}</div>
      </div>

      <div>
        <MealItemForm id={id} onAddItemToCart={addItemToCart} />
      </div>
    </div>
  );
}

export default MealItem;
