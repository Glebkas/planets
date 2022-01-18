import React from "react";
import data from "../utils/data";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">THE PLANETS</h1>

      <button
        onClick={props.handleHumburgerClick}
        className={
          props.open
            ? "header__menu-hamburger header__menu-hamburger_close"
            : "header__menu-hamburger"
        }
      ></button>

      <Nav
        data={data}
        handleNavClick={props.handleNavClick}
        open={props.open}
      />
    </header>
  );
}

export default Header;
