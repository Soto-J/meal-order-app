import { Fragment, ReactNode, useContext } from "react";
import CartContext, { Item } from "../../store/context/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

type CartProps = {
  children?: ReactNode;

  closeCart(): void;
};

function Cart({ closeCart }: CartProps) {
  const { totalPrice, items, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const stateIsNotEmpty = items.length !== 0;

  const increment = (item: Item) => {
    addItemToCart({ ...item, quantity: 1 });
  };

  const decrement = (id: string) => {
    removeItemFromCart(id);
  };

  return (
    <Modal closeCart={closeCart}>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <Fragment key={item.id}>
            <CartItem item={item} onAdd={increment} onRemove={decrement} />
          </Fragment>
        ))}
      </ul>

      <div className={classes["total"]}>
        <span>Total Price</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>

      <div className={classes["actions"]}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          Close
        </button>

        {stateIsNotEmpty && (
          <button className={classes["button"]}>Order</button>
        )}
      </div>
      <CheckoutForm />
    </Modal>
  );
}

export default Cart;
