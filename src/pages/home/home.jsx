import { useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
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
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rozcestník | Zdraví Pardubického kraje</title>
      </Helmet>
      <div className="main-section" id="home">
        <a onClick={() => handleLinkClick("obcan", "top")} className="obcan main">
          <div className="main-title" data-aos="fade-right">
            <h2>Občan</h2>
          </div>
        </a>
        <a onClick={() => handleLinkClick("zdravotnik", "top")} className="lekar main">
          <div className="main-title" data-aos="fade-left">
            <h2>Zdravotník</h2>
          </div>
        </a>
      </div>
    </>
  );
}
