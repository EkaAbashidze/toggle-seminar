import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import data from "./data.json";
import Toggle from "./Components/Toggle";
import Button from "./Components/Button";
import Card from "./Components/Card";

function App() {
  return (
    <div className="main-container-app">
      <Toggle />
      <ul className="list-container">
        {/* <Card /> */}
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`main-container${index === 1 ? "-active" : ""} `}
          >
            <h3 className={`title${index === 1 ? "-active" : ""} `}>
              {item.title}
            </h3>
            <h1 className={`price${index === 1 ? "-active" : ""} `}>
              <span className={`currency${index === 1 ? "-active" : ""} `}>
                $
              </span>
              {item.price.monthly}
            </h1>
            <div className={`line${index === 1 ? "-active" : ""} `}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""} `}>
              {item.storage}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""} `}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""} `}>
              {item.users}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""} `}></div>
            <h4 className={`detail${index === 1 ? "-active" : ""} `}>
              {item.send}
            </h4>
            <div className={`line${index === 1 ? "-active" : ""} `}></div>
            <Button />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
