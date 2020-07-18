import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../Images/Logo--big.png";

const Logo = () => <img src={logo} alt="Logo" className={styles.logo} />;

export default Logo;
