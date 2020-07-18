import React from "react";
import styles from "../View.module.scss";
import {AppContext} from "../../context";
import InformationBox from "../../component/InformationBox/InformationBox";
import Table from "../../component/Table/Table";
import {
  faWarehouse,
  faBox,
  faDollarSign,
  faDonate,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

const DashboardView = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Dashboard</h1>
    <p>Summary and overview of our admin stuff here</p>
    <AppContext.Consumer>
      {(context) => (
        <>
          <div className={styles.information__wrapper}>
            <InformationBox
              iconName={faBox}
              name="PRODUCT COUNT"
              value={context.productList.length}
              color="#4e73df"
            />
            <InformationBox
              iconName={faWarehouse}
              name="PRODUCT AMOUNT"
              value={context.productAmount}
              color="#e74a3b"
            />
            <InformationBox
              iconName={faDollarSign}
              name="SUMMARY PRICE"
              value={"$"+ context.productSummaryPrice}
              color="#1cc88a"
            />
            <InformationBox
              iconName={faDonate}
              name="SALES"
              value={context.productOrdersAmount}
              color="#f9d37d"
            />
            <InformationBox
              iconName={faCalculator}
              name="ORDERS AMOUNT"
              value={context.productSales}
              color="#35b5d2"
            />
          </div>

          <div className={styles.table}>
            <h2 className={styles.table__title}>Product list</h2>

            <Table
              products={context.productList}
              name="Name"
              category="Category"
              amount="Amount"
              price="Price"
            />
          </div>
          <div className={styles.table}>
            <h2 className={styles.table__title}>Order list</h2>
            <Table
              products={context.orderList}
              name="Name"
              category="Product"
              amount="Amount"
              price="Total price"
            />
          </div>
        </>
      )}
    </AppContext.Consumer>
  </div>
);

export default DashboardView;
