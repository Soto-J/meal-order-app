import { ArrowUpOutline, ArrowDownOutline } from "react-ionicons";
import { ReactNode } from "react";
import classes from "./Card.module.css";

type CardProp = {
  children?: ReactNode;

  onClickSortIncrease: () => void;
  onClickSortDecrease: () => void;
};

function Card({
  onClickSortIncrease,
  onClickSortDecrease,
  children,
}: CardProp) {
  return (
    <div className={classes["card"]}>
      <div className={classes["sort-btns"]}>
        <ArrowUpOutline
          cssClasses={classes["sort-btn"]}
          onClick={onClickSortIncrease}
        />
        <ArrowDownOutline
          cssClasses={classes["sort-btn"]}
          onClick={onClickSortDecrease}
        />
      </div>

      {children}
    </div>
  );
}

export default Card;
