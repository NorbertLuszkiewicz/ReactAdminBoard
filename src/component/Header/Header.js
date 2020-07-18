import React from "react";
import styles from "./Header.module.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import LoggedUser from "../LoggedUser/LoggedUser";
import Nav from "../Nav/Nav";
import Options from "../Options/Options";

class Header extends React.Component {
  state = {
    navigationState: "close",
    loggedUserState: "close",
  };

  navChanger = () => {
    this.state.navigationState === "close"
      ? this.setState({
          navigationState: "open",
        })
      : this.setState({
          navigationState: "close",
        });
  };

  loggedUserChanger = () => {
    this.state.loggedUserState === "close"
      ? this.setState({
          loggedUserState: "open",
        })
      : this.setState({
          loggedUserState: "close",
        });
  };

  render() {
    return (
      <>
        <div className={styles.header}>
          <HamburgerMenu
            click={this.navChanger}
            state={this.state.navigationState}
          />
          <Logo />
          <LoggedUser click={this.loggedUserChanger} />
          <Options optionsState={this.state.loggedUserState} />
        </div>
        <Nav menuState={this.state.navigationState} />
      </>
    );
  }
}

export default Header;
