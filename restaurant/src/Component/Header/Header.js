import React from "react";
//import HeaderButton from "./HeaderButton";
//import image from "../../Img/header.png";
import { Button } from "../Button/Button";
import "../../Stylesheet/Stylesheet.scss";
import sushi from "../../Video/sushi.mp4";

function Header() {
  return (
    <div className="Header">
      <video src={sushi} autoPlay loop muted />
      <h1 className="Header__title">Restaurant Sushi</h1>
      <p className="Header__text">Den bedste lokale sushi i byen</p>
      <div className="Header__hero-btns">
        <Button
          className="btns Header__btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Book Now
        </Button>
        <Button
          className="btns Header__btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Menu
        </Button>
      </div>
    </div>
  );
}

export default Header;
