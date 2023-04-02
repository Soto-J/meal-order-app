import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

type ModalProps = {
  children?: ReactNode;
  closeCart(): void;
};

function Modal({ closeCart, children }: ModalProps) {
  const overlayEl = document.getElementById("overlay")!;
  const overlay = (
    <Fragment>
      <div className={classes["backdrop"]} onClick={closeCart} />

      <div className={classes["modal"]}>
        <div className={classes["content"]}>{children}</div>
      </div>
    </Fragment>
  );

  return <Fragment>{ReactDOM.createPortal(overlay, overlayEl)}</Fragment>;
}

export default Modal;
