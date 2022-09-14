import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meal Order</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of food." />
      </div>
    </Fragment>
  );
};
