import React, { useState } from "react";
import Container from "./Components/Container";
import Toggle from "./Components/Toggle";
import styled from "styled-components";
import "./App.css";
import data from "./data.json";
import Button from "./Components/Button";

function App() {
  console.log(data[0]);

  // const basic = {
  //   title: "Basic",
  //   price: { monthly: "19.99", yearly: "199.99" },
  //   storage: "500 GB Storage",
  //   users: "2 Users Allowed",
  //   send: "Send up to 3 GB",
  // };
  // const professional = {
  //   title: "Professional",
  //   price: { monthly: "24.99", yearly: "249.99" },
  //   storage: "1 TB Storage",
  //   users: "5 Users Allowed",
  //   send: "Send up to 10 GB",
  // };
  // const master = {
  //   title: "Master",
  //   price: { monthly: "39.99", yearly: "239.99" },
  //   storage: "2 TB Storage",
  //   users: "10 Users Allowed",
  //   send: "Send up to 20 GB",
  // };

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
        {data.map((item, index) => (
          <div
            key={index}
            className={`main-container${index === 1 ? "-active" : ""}`}
          >
            <h3 className={`title${index === 1 ? "-active" : ""}`}>
              {item.title}
            </h3>
            <h1 className={`price${index === 1 ? "-active" : ""}`}>
              <span className="currency">$</span>
              {item.price.monthly}
            </h1>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.storage}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.users}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""}`}>
              {item.send}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""}`}></div>
            {/* <button className={`learn-button${index === 1 ? "-active" : ""}`}>
              learn more
            </button> */}

            <Button className={`learn-button${index === 1 ? "-active" : ""}`} />
          </div>
        ))}

        {/* <div className="main-container-active">
          <h3 className="title-active">{data[1].title}</h3>
          <h1 className="price-active">
            <span className="currency-active">$</span>
            {data[1].price.monthly}
          </h1>
          <div className="line-active"></div>
          <h4 className="detail-active">{data[1].storage}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{data[1].users}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{data[1].send}</h4>
          <div className="line-active"></div>
          <button className="learn-button-active">learn more</button>
        </div>
        <div className="main-container">
          <h3 className="title">{data[2].title}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {data[2].price.monthly}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{data[2].storage}</h4>
          <div className="line"></div>
          <h4 className="detail">{data[2].users}</h4>
          <div className="line"></div>
          <h4 className="detail">{data[2].send}</h4>
          <div className="line"></div>
          <button className="learn-button">learn more</button>
        </div> */}
      </ul>
    </div>
  );
}

export default App;
