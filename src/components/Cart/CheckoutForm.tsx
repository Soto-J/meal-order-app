import classes from "./CheckoutForm.module.css";

function CheckoutForm() {
  return (
    <form>
      <div className={classes["control"]}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Name" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder="Address" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" placeholder="Address" />
      </div>
      <div className={classes["control"]}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="Address" />
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default CheckoutForm;
