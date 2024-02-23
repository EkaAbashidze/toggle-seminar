import { useState } from "react";
import './Toggle.css';

const Toggle = ({ isClicked, setIsClicked }) => {
  function handleClick() {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  }

  return (
    <div className="toggle-component">
      <h1 className="headline">Our Pricing</h1>
      <div className="pricing-toggle">
        <p className="options">Annually</p>
        <div
          className="toggle-btn"
          onClick={handleClick}
          style={isClicked ? { justifyContent: "flex-start" } : {}}
        >
          <div className="circle"></div>
        </div>
        <p className="options">Monthly</p>
      </div>
    </div>
  );
};

export default Toggle;
