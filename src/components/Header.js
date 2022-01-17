import React from "react";
import data from "../utils/data";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">THE PLANETS</h1>
      <button
        onClick={props.handleHumburgerClick}
        className={
          props.open ? "header__menu-hamburger header__menu-hamburger_close" : "header__menu-hamburger"
        }
      ></button>
      <ul className={props.open ? "header__nav-mobile" : "header__nav"}>
        {data.map((item) => (
          <li
            className={
              props.open
                ? `header__nav-item-mobile header__nav-item-mobile_type_${item.name.toLowerCase()}`
                : "header__nav-item"
            }
            onClick={() => props.handleNavClick(item)}
            key={item.name}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
