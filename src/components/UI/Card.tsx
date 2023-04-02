import { ReactNode } from "react";
import classes from "./Card.module.css";

type CardProp = {
  children?: ReactNode;
};

function Card({ children }: CardProp) {
  return <div className={classes["card"]}>{children}</div>;
}

export default Card;
