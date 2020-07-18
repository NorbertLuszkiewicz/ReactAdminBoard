import React from "react";
import styles from "../View.module.scss";
import InformationBox from "../../component/InformationBox/InformationBox";
import { faUserTie, faUser } from "@fortawesome/free-solid-svg-icons";
import Table from "../../component/Table/Table";

class UsersView extends React.Component {
  state = {
    adminsNumber: 2,
    usersNumber: 4,
    admins: [
      { firstName: "John", lastName: "Adams", email: "jadams@em.com" },
      { firstName: "Tiana", lastName: "Reynolds", email: "Tianarey@em.com" },
    ],
    users: [
      { firstName: "Gino", lastName: "Metcalfe", email: "ginometcalfe@em.com" },
      { firstName: "Arda", lastName: "O'Doherty", email: "ardadoherty@em.com" },
      { firstName: "Olaf", lastName: "Valencia", email: "valenciaolaf@em.com" },
      { firstName: "Keane", lastName: "Blevins", email: "keaneblevins@em.com" },
    ],
  };

  changeQuantityAdminsAndUsers = () => {
    this.setState({
      adminsNumber: this.state.admins.length,
      usersNumber: this.state.users.length,
    });
  };

  addAdmin = (user) => {
    let userDelete = this.state.users.indexOf(user);
    this.state.users.splice(userDelete, 1);
    this.state.admins.push(user);

    this.changeQuantityAdminsAndUsers();
  };

  removeAdmin = (user) => {
    let userDelete = this.state.admins.indexOf(user);
    this.state.admins.splice(userDelete, 1);
    this.state.users.push(user);

    this.changeQuantityAdminsAndUsers();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Users</h1>
        <p>Users here</p>
        <div className={styles.information__wrapper}>
          <InformationBox
            iconName={faUserTie}
            name="ADMINS"
            value={this.state.adminsNumber}
            color="#4e73df"
          />
          <InformationBox
            iconName={faUser}
            name="USERS"
            value={this.state.usersNumber}
            color="#e74a3b"
          />
        </div>
        <div className={styles.table}>
          <h2 className={styles.table__title}>Admin list</h2>

          <Table
            products={this.state.admins}
            name="First Name"
            category="Last Name"
            amount="Email"
            modification={["Admin", "Revert Admin"]}
            toDelete={(e) => this.removeAdmin(e)}
          />
        </div>

        <div className={styles.table}>
          <h2 className={styles.table__title}>User list</h2>

          <Table
            products={this.state.users}
            name="First Name"
            category="Last Name"
            amount="Email"
            modification={["User", "Set Admin"]}
            color="green"
            toDelete={(user) => this.addAdmin(user)}
          />
        </div>
      </div>
    );
  }
}

export default UsersView;
