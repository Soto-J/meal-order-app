import { ReactNode } from "react";
import { Item } from "../../store/cart-context";
import classes from "./CartItem.module.css";

type CartItemProps = {
  item: {
    id: string;
    quantity: number;
    name: string;
    description: string;
    price: number;
  };

  children?: ReactNode;

  onRemove: (id: string) => void;
  onAdd: (item: Item) => void;
};

const CartItem = ({ item, onAdd, onRemove }: CartItemProps) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${item.price.toFixed(2)}`}</span>
          <span className={classes.amount}>{`x ${item.quantity}`}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={() => onRemove(item.id)}>-</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
