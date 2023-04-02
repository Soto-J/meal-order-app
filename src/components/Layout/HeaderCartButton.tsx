import { ReactNode, useContext } from "react";
import CartContext from "../../store/cart-context";
import { CartIcon } from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {
  children?: ReactNode;
  openCart(): void;
};

function HeaderCartButton({ openCart, children }: HeaderCartButtonProps) {
  const cartContext = useContext(CartContext);

  const numberOfItems = String(
    cartContext.items.reduce((acc, item) => (acc += item.quantity!), 0)
  );

  return (
    <button className={classes["button"]} onClick={openCart}>
      <span className={classes["icon"]}>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={classes["badge"]}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
