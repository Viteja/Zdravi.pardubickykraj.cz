import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./widgets.css";

export default function Obcan_btn() {
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
      <div className="obcan-btn" onClick={() => handleLinkClick("/obcan", "rozcestnik")}>
        <h5>Občan</h5>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className="btn" onClick={() => handleLinkClick("/zdravotnik", "rozcestnik")}>
        <h5>Zdravotnik</h5>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}
