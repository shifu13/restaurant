import Header from "../Component/Header/Header";
import React from "react";
import "../Stylesheet/Stylesheet.scss";
import Carddishes from "../Component/Card/Carddishes";

function Homepage() {
  return (
    <>
      <Header />
      <Carddishes />
    </>
  );
}

export default Homepage;
