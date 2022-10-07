import { useState, useContext, Fragment } from "react";
import { CartContext } from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import { Checkout } from "./Checkout";
import { CartItem } from "./CartItem";
import classes from "./Cart.module.css";

export const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(true);
  const [postError, setPostError] = useState("");
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // console.log(cartCtx.items);
  // console.log("length:", cartCtx.items.length);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const orderClickHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://react-http-669cf-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
        }
      );
      if (!response.ok) {
        setSubmitSuccessful(false);
        setDidSubmit(true);
        setIsSubmitting(false);
        throw new Error("Something went wrong!");
      }
      setSubmitSuccessful(true);
      setDidSubmit(true);
      setIsSubmitting(false);
      cartCtx.clearCart();
      
      return response;
    } catch (error) {
      setPostError(error.message);
    }
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

  const orderCloseBtns = !isCheckout && (
    <div className={classes.actions}>
      <button onClick={props.onHideCart} className={classes["button--close"]}>
        Close
      </button>
      {hasItems && (
        <button
          onClick={orderClickHandler}
          className={classes["button--order"]}
        >
          Order
        </button>
      )}
    </div>
  );

  const carModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onHideCart={props.onHideCart}
          onSubmitOrder={submitOrderHandler}
        />
      )}
      {orderCloseBtns}
    </Fragment>
  );

  const submitSuccessContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.button}>
          Close
        </button>
      </div>
    </Fragment>
  );

  const submitErrorContent = (
    <Fragment>
      <p>{postError}</p>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.button}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {postError && submitErrorContent}
      {!isSubmitting && !didSubmit && carModalContent}
      {isSubmitting && <p>Sending order data...</p>}
      {didSubmit && !isSubmitting && submitSuccessful && submitSuccessContent}
    </Modal>
  );
};
