import React from "react";
import styles from "./Table.module.scss";
import PropTypes from "prop-types";

const TableRow = ({ name, number}) => (
  <th className={styles.table__column} >
    {name ?
    name:
    number}
  </th>
);

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TableRow;
