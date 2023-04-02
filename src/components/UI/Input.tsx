import { forwardRef, ReactNode } from "react";
import classes from "./Input.module.css";
// TESTING FORWARD REF
type InputProps = {
  children?: ReactNode;
  label: string;
  id: string;
  attr: {
    type: string;
    min: string;
    max: string;
    steps: string;
    defaultValue: string;
  };
};

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(function ({ label, id, attr }, ref?) {
  return (
    <div className={classes["input"]}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...attr} />
    </div>
  );
});

export default Input;
