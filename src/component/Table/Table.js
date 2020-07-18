import React from "react";
import styles from "./Table.module.scss";
import TableRow from "./TableRow";

const Table = ({
  products,
  name = "Name",
  category = "Category",
  amount = "Amount",
  price,
  modification,
  toDelete,
  color,
}) => {
  let iteration = 0;

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <tr className={styles.table__row}>
            <th className={styles.table__column} key={"#" + iteration}>
              #
            </th>
            <th className={styles.table__column} key={name + iteration}>
              {name}
            </th>
            <th className={styles.table__column} key={category + iteration}>
              {category}
            </th>
            <th className={styles.table__column} key={amount + iteration}>
              {amount}
            </th>
            <th className={styles.table__column} key={price + iteration}>
              {price}
            </th>
            {modification ? (
              <th className={styles.table__column} key={"Delite" + iteration}>
                {modification[0]}
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {products.map(
            (item) => (
              item.firstName && [
                (item.name = item.firstName),
                (item.category = item.lastName),
                (item.amount = item.email),
                (item.price = ""),
              ],
              (
                <tr className={styles.table__row} key={"row" + iteration}>
                  <TableRow
                    name={(iteration = iteration + 1).toString()}
                    key={iteration}
                  />
                  <TableRow name={item.name} key={item.name + iteration} />
                  <TableRow
                    name={item.category}
                    key={item.category + iteration * 100000}
                  />
                  <TableRow
                    name={item.amount.toString()}
                    key={item.amount + iteration * 10000}
                  />
                  <TableRow
                    name={item.price.toString()}
                    key={item.price + "price" + iteration}
                  />

                  {modification ? (
                    <th
                      className={styles.table__column}
                      key={"Delite" + iteration}
                    >
                      <button
                        className={
                          color
                            ? styles.table__deleteButon +
                              " " +
                              styles.table__deleteButtonGreen
                            : styles.table__deleteButon
                        }

                        onClick={() => toDelete(item)}
                      >
                        {modification[1]}
                      </button>
                    </th>
                  ) : null}
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
