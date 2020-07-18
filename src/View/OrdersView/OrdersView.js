import React from "react";
import styles from "../View.module.scss";
import { AppContext } from "../../context";
import InformationBox from "../../component/InformationBox/InformationBox";
import Table from "../../component/Table/Table";
import OrderForm from "../../component/Form/OrderForm";
import { faDonate, faCalculator } from "@fortawesome/free-solid-svg-icons";

const OrdersView = ({ addOrder, item }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Order</h1>
    <p>Orders here</p>
    <AppContext.Consumer>
      {(context) => (
        <>
          <div className={styles.information__wrapper}>
            <InformationBox
              iconName={faDonate}
              name="TOTAL SALES"
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
            <div className={styles.table__title}>Order list</div>
            <Table
              products={context.orderList}
              name="Name"
              category="Product"
              amount="Total Amount"
              price="Price"
            />
          </div>

          <OrderForm item={item} context={context} addOrder={addOrder} />

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
        </>
      )}
    </AppContext.Consumer>
  </div>
);

export default OrdersView;
