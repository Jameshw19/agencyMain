import Image from "next/image";
import React from "react";
import { ourWork } from "../../data/ourWork";
// import ComingSoon from "../../public/assets/work/comingSoon.mp4";

const OurWork = () => {
  return (
    <section id="works">
      <div className="container">
        <div className="section__header--hr"></div>
        <div className="section__header--content">
          <h2>Works.</h2>
          {ourWork.length > 6 && (
            <button
              className="header__button works__btn"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              View All
            </button>
          )}
        </div>
        <h4 className="text-uppercase">Things we&apos;ve made</h4>
        <div className="ourwork__wrapper">
          {ourWork.slice(0, 9).map((item, index) => (
            <div key={index} className="ourwork__card">
              <Image className="ourwork__image" src={item.image} alt="work" />
              <div className="ourwork__card--title">
                <div>{item.title}</div>
                <div className="our-work__link">
                  <a href={item.link} target="_blank">
                    View Website
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="ourwork__card--soon">
            <img
              src="https://video-public.canva.com/VAFFJbd-a14/v/5f8f3d84e2.gif"
              className="ourwork__image"
              alt="work"
            />
            <div className="ourwork__card--title">
              <div>Project In Works..</div>
              <div className="our-work__link">
                {/* <a href={item.link} target="_blank">
                  View Website
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
