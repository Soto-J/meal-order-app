import { Fragment, ReactNode, useContext, useState } from "react";
import CartContext, { Item } from "../../store/context/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

type CartProps = {
  children?: ReactNode;

  closeCart: () => void;
};

function Cart({ closeCart }: CartProps) {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const { totalPrice, items, addItemToCart, removeItemFromCart, clearCart } =
    useContext(CartContext);

  const price = totalPrice.toFixed(2).replace("-0", "0"); // Avoid JS -0 value when removing items from cart

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

  const onSubmit = async (userData: any) => {
    setIsLoading(true);
    await fetch(
      "https://meal-order-app-30380-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: items }),
      }
    );
    setIsLoading(false);
    setDidSubmit(true);

    clearCart();
  };

  const cartModalContent = (
    <Fragment>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <Fragment key={item.id}>
            <CartItem item={item} onAdd={increment} onRemove={decrement} />
          </Fragment>
        ))}
      </ul>

      <div className={classes["total"]}>
        <span>Total Price</span>
        <span>${price}</span>
      </div>

      {showForm && <CheckoutForm onSubmit={onSubmit} onCancel={closeCart} />}

      {/* Action Buttons - Hide when cart is empty */}
      {stateIsNotEmpty && !showForm && (
        <div className={classes["actions"]}>
          <button className={classes["button--alt"]} onClick={closeCart}>
            Close
          </button>

          <button className={classes["button"]} onClick={showFormHandler}>
            Order
          </button>
        </div>
      )}
    </Fragment>
  );

  const isLoadingContent = <p>Sending order data...</p>;

  const didSubmitContent = <h2>Succesfully completed order!</h2>;

  return (
    <Modal closeCart={closeCart}>
      {isLoading && !didSubmit && isLoadingContent}
      {!isLoading && !didSubmit && cartModalContent}
      {!isLoading && didSubmit && didSubmitContent}
    </Modal>
  );
}

export default Cart;
