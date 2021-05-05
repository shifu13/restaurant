import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { Button } from "../Button/Button";

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="Navigation">
        <div className="Navigation__container">
          <Link to="/" className="Navigation__logo" onClick={closeMobileMenu}>
            LOGO
          </Link>
          <div className="Navigation__menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/book"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Book
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">BOOK</Button>}
        </div>
      </div>
    </>
  );
}

export default Navigation;
