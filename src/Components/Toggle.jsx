import React from "react";

const Toggle = () => {
  return (
    <div className="toggle-component">
      <h1 className="headline">Our Pricing</h1>
      <div className="pricing-toggle">
        <p className="options">Annually</p>
        <div className="toggle-btn">
          <div className="circle"></div>
        </div>
        <p className="options">Monthly</p>
      </div>
    </div>
  );
};

export default Toggle;
