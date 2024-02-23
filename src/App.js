import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import data from "./data.json";

function App() {
  console.log(data[0]);



  const basic = {
    title: "Basic",
    price: { monthly: "19.99", yearly: "199.99" },
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB",
  };

  const professional = {
    title: "Professional",
    price: { monthly: "24.99", yearly: "249.99" },
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB",
  };

  const master = {
    title: "Master",
    price: { monthly: "39.99", yearly: "239.99" },
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB",
  };

  return (
    <div className="main-container-app">
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
      <ul className="list-container">
        <div className="main-container">
          <h3 className="title">{basic.title}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {basic.price.monthly}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{basic.storage}</h4>
          <div className="line"></div>
          <h4 className="detail">{basic.users}</h4>
          <div className="line"></div>
          <h4 className="detail">{basic.send}</h4>
          <div className="line"></div>
          <button className="learn-button">learn more</button>
        </div>

        <div className="main-container-active">
          <h3 className="title-active">{professional.title}</h3>
          <h1 className="price-active">
            <span className="currency-active">$</span>
            {professional.price.monthly}
          </h1>
          <div className="line-active"></div>
          <h4 className="detail-active">{professional.storage}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{professional.users}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{professional.send}</h4>
          <div className="line-active"></div>
          <button className="learn-button-active">learn more</button>
        </div>
        <div className="main-container">
          <h3 className="title">{master.title}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {master.price.monthly}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{master.storage}</h4>
          <div className="line"></div>
          <h4 className="detail">{master.users}</h4>
          <div className="line"></div>
          <h4 className="detail">{master.send}</h4>
          <div className="line"></div>
          <button className="learn-button">learn more</button>
        </div>
      </ul>
    </div>
  );
}

export default App;
