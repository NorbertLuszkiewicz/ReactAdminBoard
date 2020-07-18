import React from "react";
import styles from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ iconName, text }) => (
  <li className={styles.navItem}>
    <NavLink exact
      className={styles.navItem__link}
      activeClassName={styles.navItem__linkActive}
      to={ text ==="Dashboard" ?
        "/" :
        "/" + text}
    >
      <FontAwesomeIcon size="2x" icon={iconName} />
      <span>{text}</span>
    </NavLink>
  </li>
);

export default NavItem;
