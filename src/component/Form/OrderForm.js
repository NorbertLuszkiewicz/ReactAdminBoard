import React from "react";
import styles from "./Form.module.scss";
import Button from "../Button/Button";

class OrderForm extends React.Component {
  state = {
    name: "",
    category: "Chocolate",
    amount: "",
    price: "",
    index: 0,
  };

  getNewOrderValue = (e, name, whatIsMax) => {
    this.setState({ [name]: e.target.value });
    whatIsMax
      ? e.target.value > whatIsMax
        ? this.setState({ [name]: whatIsMax })
        : this.setState({ [name]: e.target.value })
      : this.setState({ [name]: e.target.value });
  };

  getPriceValue = (e, multiplier) => {
    this.setState({
      price:
        e.target.value > multiplier.amount
          ? multiplier.amount * multiplier.price
          : e.target.value * multiplier.price,
    });
  };

  addNewOrder = (e) => {
    e.preventDefault();
    this.props.addOrder(this.state);
    this.resetForm(e);
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      category: this.state.category,
      name: "",
      amount: "",
      price: "",
      index: this.state.index,
    });
  };

  getIndexProduct = (e) => {
    let index = 0;
    let iteration = 0;
    this.props.context.productList.map((item) =>
      item.name === this.state.category
        ? (index = iteration)
        : (iteration = iteration + 1)
    );
    this.setState({
      index: index,
    });
  };

  render() {
    const maxAmount = this.props.context.productList[this.state.index];
    const mainStateProduct = this.props.context.productList;

    return (
      <form className={styles.form} onSubmit={this.addNewOrder}>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Product</p>
          <select
            className={styles.form__item}
            onClick={(e) => this.getIndexProduct(e)}
            onChange={(e) => {
              this.getNewOrderValue(e, "category");
              this.getIndexProduct(e);
            }}
          >
            {mainStateProduct.map((item) => (
              <option key={item.name + mainStateProduct.indexOf(item)}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Order name</p>
          <input
            className={styles.form__item}
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.getNewOrderValue(e, "name")}
            required
          />
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Amount</p>
          <input
            className={styles.form__item}
            type="number"
            max={maxAmount.amount}
            min="1"
            placeholder="Amount"
            value={this.state.amount}
            onChange={(e) => {
              this.getNewOrderValue(e, "amount", maxAmount.amount);
              this.getPriceValue(e, maxAmount);
            }}
            required
          />
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.form__name}>Price</p>
          <input
            required
            readOnly
            className={styles.form__item + " " + styles.form__itemReadOnly}
            placeholder="0"
            value={this.state.price}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit" name="Add Product" />
          <Button type="submit" red="yes" name="Reset" click={this.resetForm} />
        </div>
      </form>
    );
  }
}

export default OrderForm;
