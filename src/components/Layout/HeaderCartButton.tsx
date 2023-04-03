import { ReactNode, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { CartIcon } from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {
  children?: ReactNode;

  openCart(): void;
};

function HeaderCartButton({ openCart, children }: HeaderCartButtonProps) {
  const [btnClicked, setBtnClicked] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((acc, item) => (acc += item.quantity!), 0);

  const btnAnimation = `${btnClicked ? classes["bump"] : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnClicked(true);

    setTimeout(() => {
      setBtnClicked(false);
    }, 300);
  }, [items]);

  return (
    <button
      className={`${classes["button"]} ${btnAnimation}`}
      onClick={openCart}
    >
      <span className={classes["icon"]}>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={classes["badge"]}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
