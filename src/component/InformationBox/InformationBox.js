import React from "react";
import styles from "./InformationBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InformationBox = ({ iconName, name, value, color }) => {
  let borderLeftColor = { borderLeft: "4px solid " + color };

  return (
    <div className={styles.information} style={borderLeftColor}>
      <div className={styles.information__valueBox}>
        <p className={styles.information__name}>{name}</p>
        <p className={styles.information__value}>{value}</p>
      </div>
      <FontAwesomeIcon
        icon={iconName}
        className={styles.information__icon}
      ></FontAwesomeIcon>
    </div>
  );
};

export default InformationBox;
