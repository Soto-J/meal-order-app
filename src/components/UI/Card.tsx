import { ArrowUpOutline, ArrowDownOutline } from "react-ionicons";
import { ReactNode } from "react";
import classes from "./Card.module.css";

type CardProp = {
  children?: ReactNode;
  error?: Error | null;
  onClickSortIncrease: () => void;
  onClickSortDecrease: () => void;
};

function Card({
  onClickSortIncrease,
  onClickSortDecrease,
  error,
  children,
}: CardProp) {
  return (
    <div className={classes["card"]}>
      {error && <p>Error: {error.message}</p>}

      {!error && (
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
      )}

      {children}
    </div>
  );
}

export default Card;
