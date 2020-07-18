import React from "react";
import styles from "./Options.module.scss";

const Options = ({optionsState}) => (
  <div className={ optionsState === "open" ?
    styles.optionsActive :
    styles.options
    }>
    <button className={styles.options__item}>Options</button>
    <button className={styles.options__item}>Help</button>
    <button className={styles.options__item}>Logout</button>
  </div>
);

export default Options;
