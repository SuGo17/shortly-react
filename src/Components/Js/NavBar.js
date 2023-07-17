import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/navbar.css";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const handleNavClick = () => {
    setMenu(false);
  };
  return (
    <nav>
      <div className="nav">
        <Link to="/" className="logo">
          Shortly
        </Link>
        <div className={`nav-bar ${menu ? "open" : ""} `}>
          <ul className="left-links">
            <li>
              <Link to="/pricing" className="nav-link" onClick={handleNavClick}>
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="nav-link"
                onClick={handleNavClick}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="right-links">
            <li>
              <Link
                to="/login"
                className="nav-link btn"
                onClick={handleNavClick}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <span
          className="menu"
          style={menu ? { color: "#fff" } : { color: "#333" }}
          onClick={handleClick}
        >
          <ion-icon name={menu ? "close-outline" : "menu-outline"}></ion-icon>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
