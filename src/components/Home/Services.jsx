import React from "react";
import { servicesData } from "../../data/servicesData";
import { HiArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  return (
    <section id="services">
      <div className="services__wrapper container">
        <div className="section__header--hr"></div>
        <h2 className="services__title">Services.</h2>
        <h4 className="services__sub--title">we work with you, not for you</h4>
        <div className="services__card--wrapper">
          {servicesData.map((item, index) => (
            <div key={index} className="service__description--wrapper">
              <div className="services__card">
                <div className="services__icon--left">{item.icon}</div>
                <div key={index} className="services__card--title">
                  {item.title}
                </div>
              </div>
              <div className="services__icon--right">
                <HiArrowNarrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
