import { Fragment, ReactNode, useContext, useState } from "react";
import CartContext, { Item } from "../../store/context/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { Meal } from "../Meals/AvailableMeals";

type CartProps = {
  children?: ReactNode;

  closeCart: () => void;
};

function Cart({ closeCart }: CartProps) {
  const [showForm, setShowForm] = useState(false);
  const { totalPrice, items, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const stateIsNotEmpty = items.length !== 0;

  const increment = (item: Item) => {
    addItemToCart({ ...item, quantity: 1 });
  };

  const decrement = (id: string) => {
    removeItemFromCart(id);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const onSubmit = (userData: Meal) => {};

  const actionButtons = stateIsNotEmpty && !showForm && (
    <div className={classes["actions"]}>
      <button className={classes["button--alt"]} onClick={closeCart}>
        Close
      </button>

      <button className={classes["button"]} onClick={showFormHandler}>
        Order
      </button>
    </div>
  );

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

      {showForm && <CheckoutForm onSubmit={onSubmit} onCancel={closeCart} />}

      {actionButtons}
    </Modal>
  );
}

export default Cart;
