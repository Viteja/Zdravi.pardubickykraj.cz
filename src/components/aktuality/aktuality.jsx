import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./aktuality.css";

const Aktuality = (promps) => {
  return (
    <>
      <SplideSlide>
        <div className="xd">
          <div className="card">
            <div className="card-content">
              <img src={promps.src} alt="Aktuality" />
              <h3>{promps.title}</h3>
              <p>{promps.text}</p>
            </div>
            <div className="card-bottom">
              <p>Zdroj</p>
              <div className="card-bottom-content">
                <p>29.05.2024</p>
                <a href={promps.href} target="_blank">
                  <h5>Číst více</h5>
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </>
  );
};

export default Aktuality;
