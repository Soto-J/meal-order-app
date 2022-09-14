import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log(cartCtx.items);
  console.log("length:", cartCtx.items.length);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--close"]}>
          Close
        </button>
        {hasItems && (
          <button className={classes["button--order"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};
