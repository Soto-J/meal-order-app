import { ReactNode, useContext, useEffect, useState } from "react";
import CartContext from "../../store/context/cart-context";
import classes from "./HeaderCartButton.module.css";
import { Cart } from "react-ionicons";

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

    const timer = setTimeout(() => {
      setBtnClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={`${classes["button"]} ${btnAnimation}`}
      onClick={openCart}
    >
      <span className={classes["icon"]}>
        <Cart color="#ffff" />
      </span>
      <span>{children}</span>
      <span className={classes["badge"]}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
