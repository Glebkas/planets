import React from "react";
import data from "../utils/data";

function Header({ setPlanet }) {
  const [open, setOpen] = React.useState(false);

  function handleNavClick(planet) {
    setPlanet(planet);
    console.log(planet);
    if (open) {
      setOpen(false);
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">THE PLANETS</h1>
      <ul className={open ? "header__nav_active" : "header__nav"}>
        {data.map((item) => (
          <li
            className="header__nav-item"
            onClick={() => handleNavClick(item)}
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

