import React from "react";
import styles from "../View.module.scss";
import { AppContext } from "../../context";
import InformationBox from "../../component/InformationBox/InformationBox";
import Table from "../../component/Table/Table";
import ProductForm from "../../component/Form/ProductForm";
import {
  faWarehouse,
  faBox,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const ProductsView = ({ toDelete, item }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Products</h1>
    <p>Products here</p>
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
              value={"$" + context.productSummaryPrice}
              color="#1cc88a"
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
              modification={["Delete", "X"]}
              toDelete={toDelete}
            />
          </div>

          <ProductForm rootState={context} item={item} />
        </>
      )}
    </AppContext.Consumer>
  </div>
);

export default ProductsView;
