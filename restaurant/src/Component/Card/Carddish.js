import React from "react";

function Carddish(props) {
  return (
    <>
      <li className="Carddish-item__wrapper">
        <div className="Carddish-item__img-wrapper">
          <img className="Carddish-item__img" src={props.src} alt="menu" />
        </div>
        <div className="Carddish-item__info-wrapper">
          <h5 className="Carddish-item__info-title">{props.title}</h5>
          <p className="Carddish-item__info-text">{props.text}</p>
        </div>
      </li>
    </>
  );
}

export default Carddish;
