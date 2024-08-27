import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);

  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 25) {
        setScroll(true);
        console.log("scroll");
      } else {
        setScroll(false);
      }
    });
  });

  function handleClickScroll(id) {
    navigate("/");
    setTimeout(() => {
      var element = document.getElementById(id);
      var headerOffset = 120;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);
  }

  const handleLinkClick = (path, id) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById(id) ? document.getElementById(id).offsetTop - 120 : 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const getClassName = (path) => {
    return location.pathname.startsWith(path) ? "active regular" : " regular ";
  };

  const navLogo = (path) => {
    return location.pathname.startsWith(path) ? "blue-logo" : "red-logo";
  };

  return (
    <nav className={scroll ? "navbar" : "navbar navbar-scroll"}>
      <div className="container">
        <div className="navbar">
          <a onClick={() => handleClickScroll("home")}>
            <div className="logo">
              <img src="/img/pcelogo.webp" alt="Pardubický Kraj Logo" draggable="false" />
              <h1>
                Zdravi.<span className={navLogo("/zdravotnik")}>pardubickykraj.cz</span> - <b>Testovací verze</b>
              </h1>
            </div>
          </a>
          <div className="menu">
            <ul className={isOpen ? "show" : "hide"}>
              <li>
                <a onClick={() => handleLinkClick("/obcan")} className={getClassName("/obcan")}>
                  Občan
                </a>
              </li>
              <li>
                <a onClick={() => handleLinkClick("/zdravotnik")} className={getClassName("/zdravotnik")}>
                  Zdravotník
                </a>
              </li>
            </ul>
          </div>
          {!isOpen ? <i className="fa-solid fa-bars nav-changer" onClick={() => setisOpen(true)}></i> : <i className="fa-solid fa-xmark nav-changer" onClick={() => setisOpen(false)}></i>}
        </div>
      </div>
    </nav>
  );
}
