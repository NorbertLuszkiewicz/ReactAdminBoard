import React from "react";
import styles from "./Nav.module.scss";
import {
  faWarehouse,
  faTachometerAlt,
  faDollarSign,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem/NavItem";

const Nav = ({menuState}) => {
  return (
    <div
      className={
        menuState === "open" ? styles.wrapperActive : styles.wrapper
      }
    >
      <ul className={styles.nav}>
        <div className={styles.nav__divider}></div>
        <NavItem iconName={faTachometerAlt} text="Dashboard" />
        <div className={styles.nav__divider}>
          <p>WAREHOUSE</p>
        </div>
        <NavItem iconName={faWarehouse} text="Products"  />
        <NavItem iconName={faDollarSign} text="Orders" />
        <div className={styles.nav__divider}>ADMIN</div>
        <NavItem iconName={faUsers} text="Users" />
      </ul>
    </div>
  );
};

export default Nav;
