import React from "react";
import styles from "./Form.module.scss";
import Button from "../Button/Button";

class ProductForm extends React.Component {
  state = {
    name: "",
    category: "",
    amount: "",
    price: "",
  };

  getNewProductValue = (e, name) => {
    this.setState({ [name]: e.target.value });
  };

  addNewProduct = (e) => {
    e.preventDefault();
    this.props.item(this.state);
    this.resetForm(e);
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState({ name: "", category: "", amount: "", price: "" });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.addNewProduct}>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Name</p>
          <input
            required
            className={styles.form__item}
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.getNewProductValue(e, "name")}
          />
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Category</p>
          <input
            required
            className={styles.form__item}
            type="text"
            placeholder="Category"
            value={this.state.category}
            onChange={(e) => this.getNewProductValue(e, "category")}
          />
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Amount</p>
          <input
            required
            className={styles.form__item}
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={(e) => this.getNewProductValue(e, "amount")}
          />
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Price</p>
          <input
            required
            className={styles.form__item}
            type="number"
            placeholder="Price"
            value={this.state.price}
            onChange={(e) => this.getNewProductValue(e, "price")}
          />
        </div>
        <div className={styles.buttonWrapper}>
        <Button type="submit" name="Add Product"  />
          <Button type="submit" red="yes" name="Reset" click={this.resetForm} />
          
        </div>
      </form>
    );
  }
}

export default ProductForm;
