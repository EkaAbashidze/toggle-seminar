import React from "react";
import "./Container.css";

const Container = (props) => {
  return (
    <>
      {!props.active ? (
        <div className="main-container">
          <h3 className="title">{props.details.title}</h3>
          <h1 className="price">
            <span className="currency">$</span>
            {!props.isClicked ? props.details.price.monthly : props.details.price.yearly}
          </h1>
          <div className="line"></div>
          <h4 className="detail">{props.details.storage}</h4>
          <div className="line"></div>
          <h4 className="detail">{props.details.users}</h4>
          <div className="line"></div>
          <h4 className="detail">{props.details.send}</h4>
          <div className="line"></div>
          <button onClick={props.handleClick} className="learn-button">
            learn more
          </button>
        </div>
      ) : (
        <div className="main-container-active">
          <h3 className="title-active">{props.details.title}</h3>
          <h1 className="price-active">
            <span className="currency-active">$</span>
            {!props.isClicked ? props.details.price.monthly : props.details.price.yearly}
          </h1>
          <div className="line-active"></div>
          <h4 className="detail-active">{props.details.storage}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{props.details.users}</h4>
          <div className="line-active"></div>
          <h4 className="detail-active">{props.details.send}</h4>
          <div className="line-active"></div>
          <button onClick={props.handleClick} className="learn-button-active">
            learn more
          </button>
        </div>
      )}
    </>
  );
};

export default Container;
