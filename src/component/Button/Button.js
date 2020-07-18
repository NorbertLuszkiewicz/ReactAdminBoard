import React from "react";
import styles from "./Button.module.scss";

const Button = ({ red, name, type, click }) => (
  <button
    type={type}
    onClick={click}
    className={
      red === "yes" ? styles.button + " " + styles.buttonRed : styles.button
    }
  >
    {name}
  </button>
);

export default Button;
