import React from "react";
import "./Root.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from "../context";
import Header from "../component/Header/Header";
import DashboardView from "../View/DashboardView/DashboardView";
import OrdersView from "../View/OrdersView/OrdersView";
import ProductsView from "../View/ProductsView/ProductsView";
import UsersView from "../View/UsersView/UsersView";

class Root extends React.Component {
  state = {
    productList: [
      { name: "Chocolate", category: "Sweet", amount: 10, price: 4 },
      { name: "Apple", category: "Fruit", amount: 5, price: 2 },
      { name: "Straw", category: "Kitchen", amount: 100, price: 1 },
      { name: "Spoon", category: "Kitchen", amount: 3, price: 2 },
      { name: "Sugar", category: "Sweet", amount: 15, price: 5 },
    ],
    orderList: [
      { name: "Chocolate order", category: "Sweet", amount: 9, price: 47 },
      { name: "Apple order", category: "Fruit", amount: 20, price: 60 },
    ],

    productAmount: 133,
    productSummaryPrice: 231,
    productSales: 107,
    productOrdersAmount: 29,
  };

  productsValueCalculator = () => {
    let amount = 0;
    this.state.productList.map((item) => {
      return (amount = parseInt(item.amount) + parseInt(amount));
    });
    this.setState({
      productAmount: amount,
    });
  };

  productsSummaryCalculator = () => {
    let summaryPrice = 0;
    this.state.productList.map((item) => {
      return (summaryPrice =
        parseInt(item.amount) * parseInt(item.price) + parseInt(summaryPrice));
    });
    this.setState({
      productSummaryPrice: summaryPrice,
    });
  };

  ordersValueCalculator = () => {
    let amount = 0;
    let totalPrice = 0;
    this.state.orderList.map((item) => {
      return (
        (amount = parseInt(item.amount) + parseInt(amount)),
        (totalPrice = parseInt(item.price) + parseInt(totalPrice))
      );
    });
    this.setState({
      productOrdersAmount: amount,
      productSales: totalPrice,
    });
  };

  DeleteRowInTable = (elementDelete) => {
    let numberDelete = this.state.productList.indexOf(elementDelete.item);

    this.state.productList.splice(numberDelete, 1);

    this.productsValueCalculator();
    this.productsSummaryCalculator();
  };

  addProduct = (item) => {
    this.state.productList.push(item);
    this.productsValueCalculator();
    this.productsSummaryCalculator();
  };

  addOrder = (item) => {
    this.state.orderList.push(item);
    this.ordersValueCalculator();
  };
  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <Header />
          <Switch>
            <Route exact path="/" component={DashboardView} />
            <Route
              path="/Products"
              render={(props) => (
                <ProductsView
                  {...props}
                  toDelete={(number) => this.DeleteRowInTable(number)}
                  item={(item) => this.addProduct(item)}
                />
              )}
            />
            <Route
              path="/Orders"
              render={(props) => (
                <OrdersView
                  {...props}
                  addOrder={(item) => this.addOrder(item)}
                />
              )}
            />
            <Route path="/Users" component={UsersView} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
