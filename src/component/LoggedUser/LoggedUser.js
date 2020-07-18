import React from "react";
import styles from "./LoggedUser.module.scss";

const LoggedUser = ({ click }) => (
  <div className={styles.loggedUser} onClick={click}>
    <img
      className={styles.loggedUser__avatar}
      src="https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg"
      alt="Your avatar"
    />
  </div>
);

export default LoggedUser;
