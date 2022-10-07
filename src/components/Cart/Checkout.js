import { useState, useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

export const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSteet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredSteetIsValid = !isEmpty(enteredSteet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredSteetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredSteetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) return;

    props.onSubmitOrder({
      name: enteredName,
      street: enteredSteet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    nameInputRef.current.value = "";
    streetInputRef.current.value = "";
    postalCodeInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div
        className={`${classes.control} ${
          !formInputsValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" name="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Enter your name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="address">Address:</label>
        <input type="address" id="adress" name="address" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter you address.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.postalCode && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal code:</label>
        <input type="text" id="postal" name="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && <p>Must be 5 digits</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">city:</label>
        <input type="text" id="city" name="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Enter your city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onHideCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
