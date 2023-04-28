import { FormEvent, ReactNode, useRef, useState } from "react";
import classes from "./CheckoutForm.module.css";

type CheckoutFormProp = {
  children?: ReactNode;

  onSubmit: (userData: any) => void;
  onCancel: () => void;
};

const isNotEmpty = (input: string) => input.length !== 0;
const isFiveDigits = (input: string) => input.length === 5;

function CheckoutForm({ onSubmit, onCancel }: CheckoutFormProp) {
  const nameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current!.value.trim();
    const street = streetRef.current!.value.trim();
    const postal = postalRef.current!.value.trim();
    const city = cityRef.current!.value.trim();
    // Validate inputs
    const nameIsValid = isNotEmpty(name);
    const streetIsValid = isNotEmpty(street);
    const postalIsValid = isFiveDigits(postal);
    const cityIsValid = isNotEmpty(city);
    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid || streetIsValid || postalIsValid || cityIsValid;
    if (!formIsValid) {
      return;
    }
    // Po
    onSubmit({ name, street, postal, city });
  };

  // Conditional classes
  const nameClasses = `${classes["control"]} ${
    !formValidity.name && classes["invalid"]
  }`;
  const streetClasses = `${classes["control"]} ${
    !formValidity.street && classes["invalid"]
  }`;
  const postalClasses = `${classes["control"]} ${
    !formValidity.postal && classes["invalid"]
  }`;
  const cityClasses = `${classes["control"]} ${
    !formValidity.city && classes["invalid"]
  }`;

  return (
    <form className={classes["form"]} onSubmit={onSubmitHandler}>
      {/* Name */}
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" placeholder="John Doe" />
        {!formValidity.name && <p>Please enter a name.</p>}
      </div>
      {/* Street */}
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder="Address" ref={streetRef} />
        {!formValidity.street && <p>Please enter a street.</p>}
      </div>
      {/* Postal */}
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          placeholder="Ex. 10001"
          ref={postalRef}
        />
        {!formValidity.postal && <p>Please enter a Postal Code.</p>}
      </div>
      {/* City */}
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="city" ref={cityRef} />
        {!formValidity.city && <p>Please enter a city.</p>}
      </div>

      <div className={classes["actions"]}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes["submit"]}>Confirm</button>
      </div>
    </form>
  );
}

export default CheckoutForm;
