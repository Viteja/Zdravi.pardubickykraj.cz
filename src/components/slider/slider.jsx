import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./slider.css";
import { useNavigate } from "react-router-dom";

const Slider = (promps) => {
  let navigate = useNavigate();
  const handleLinkClick = (path, id) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById(id) ? document.getElementById(id).offsetTop - 120 : 0,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <SplideSlide>
        <div className="slider-wraper">
          <img src={promps.src} alt={promps.alt} />
          <div className="content">
            <h1 className="text" data-aos="fade-right">
              {promps.title}
            </h1>
            <p data-aos="fade-right" data-aos-delay="100">
              {promps.text}
            </p>
            <a onClick={() => handleLinkClick(promps.href, promps.section)} className="primary-btn" href={promps.link} target="_blank" data-aos="fade-right" data-aos-delay="200">
              Zobrazit více
            </a>
          </div>
        </div>
      </SplideSlide>
    </>
  );
};

export default Slider;
