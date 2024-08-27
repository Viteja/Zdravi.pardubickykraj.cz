import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./widgets.css";

const Lekar_btn = (promps) => {
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
    <div>
      <div className="btn" onClick={() => handleLinkClick(promps.src)}>
        <h5>{promps.title}</h5>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Lekar_btn;
