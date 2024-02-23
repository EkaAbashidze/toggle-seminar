import React from "react";
import Button from "./UI/Button";

const Card = () => {


  
  return (
    <div className="main-container">
      <h3 className="title">Master</h3>
      <h1 className="price">
        <span className="currency">$</span>
        39.99
      </h1>
      <div className="line"></div>
      <h4 className="detail">2 TB Storage</h4>
      <div className="line"></div>
      <h4 className="detail">10 Users Allowed</h4>
      <div className="line"></div>
      <h4 className="detail">Send up to 20 GB</h4>
      <div className="line"></div>
      <Button />
    </div>
  );
};

export default Card;
