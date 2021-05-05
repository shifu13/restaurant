import React from "react";
import Carddish from "./Carddish";
import hosomaki from "../../Img/hosomaki.png";
import nigiri from "../../Img/nigiri.jpg";
import uramaki from "../../Img/uramaki.jpg";

function Carddishes() {
  return (
    <div className="Carddishes">
      <h1 className="Carddishes__title">Menuen består af</h1>
      <div className="Carddishes__container">
        <div className="Carddishes__wrapper">
          <ul className="Carddishes__items">
            <Carddish
              src={hosomaki}
              title="Hosomaki"
              text="Dette er hosomaki"
            />
            <Carddish src={nigiri} title="Nigiri" text="Dette er nigiri" />
            <Carddish src={uramaki} title="Uramaki" text="Dette er uramaki" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Carddishes;
