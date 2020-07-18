import React from "react";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ click, state}) => (

  <button className={styles.button}  onClick={click} >
    <div className={ state === "open" ?
      styles.button__lineActive :
      styles.button__line
      }></div>
  </button>

);

export default HamburgerMenu;