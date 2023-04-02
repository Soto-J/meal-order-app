import { Fragment, ReactNode } from "react";
import HeaderImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  children?: ReactNode;
  openCart(): void;
};

function Header({ openCart }: HeaderProps) {
  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton openCart={openCart}>Your Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImg} alt="A table of food" />
      </div>
    </Fragment>
  );
}

export default Header;
