import React from "react";
import { headerInfoData } from "../../data/headerInfoData";

const HeaderInfo = () => {
  return (
    <div className="header__info--wrapper container">
      {headerInfoData.map((item, index) => (
        <div
          key={index}
          className={`header__info ${!index && "header__active"} `}
        >
          <div className="header__icon">{item.icon}</div>
          <h3 className="header__titlee">{item.title}</h3>
          <div className="header__hr"></div>
          <p className="header__para">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeaderInfo;
