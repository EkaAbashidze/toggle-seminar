import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div className="main-container">
      <h3 className="title">Special</h3>
      <h1 className="price">
        <span className="currency">$</span>
        15.99
      </h1>
      <div className="line"></div>
      <h4 className="detail">800 GB Storage</h4>
      <div className="line"></div>
      <h4 className="detail">10 Users Allowed</h4>
      <div className="line"></div>
      <h4 className="detail">Send up to 10 GB</h4>
      <div className="line"></div>
      <Button />
    </div>
  );
};

export default Card;
