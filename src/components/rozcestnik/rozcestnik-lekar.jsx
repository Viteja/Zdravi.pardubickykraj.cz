import React from "react";
import { useNavigate } from "react-router-dom";
import "./rozcestnik.css";

export default function Rozcestniklekar() {
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

  const getClassName = (path) => {
    return location.pathname === path ? "active-odkaz odkaz" : " odkaz ";
  };
  return (
    <div className="rozcestnik" id="rozcestnik">
      <div className="container">
        <div className="lekar-title">
          <h5>Zdravotník</h5>
          <h2>Rozcestník</h2>
        </div>
        <div className="rozcestnik-content" data-aos="fade-up">
          <div className="rozcestnik-menu">
            <a className={getClassName("/zdravotnik/naborove-prispevky")} onClick={() => handleLinkClick("/zdravotnik/naborove-prispevky", "semi")}>
              <div className="odkaz-title">
                <img src="/img/prispevek.png" alt="Náborové příspěvky" />
                <h5>Náborové příspěvky</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/zdravotnik/kariera")} onClick={() => handleLinkClick("/zdravotnik/kariera", "semi")}>
              <div className="odkaz-title">
                <img src="/img/Kariera.png" alt="Kariéra" />
                <h5>Kariéra - přidejte se k nám</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/zdravotnik/staze")} onClick={() => handleLinkClick("/zdravotnik/staze", "semi")}>
              <div className="odkaz-title">
                <img src="/img/staze.png" alt="Nabídka stáží" />
                <h5>Nabídka stáží</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/zdravotnik/skoleni")} onClick={() => handleLinkClick("/zdravotnik/skoleni", "semi")}>
              <div className="odkaz-title">
                <img src="/img/skoleni.png" alt="Nabídka školení" />
                <h5>Nabídka školení</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <div className="rozcestnik-menu">
            <a className={getClassName("/zdravotnik/benefity-mest-a-obci")} onClick={() => handleLinkClick("/zdravotnik/benefity-mest-a-obci", "semi")}>
              <div className="odkaz-title">
                <img src="/img/mest.png" alt="Benefity měst a obcí" />
                <h5>Benefity měst a obcí</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/zdravotnik/pratelska-nemocnice-zdravotnik")} href="https://www.nempk.cz/informace/pratelska-nemocnice" target="_blank">
              <div className="odkaz-title">
                <img src="/img/nemocnice.png" alt="Přátelská nemocnice" />
                <h5>Přátelská nemocnice</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className="odkaz" href="https://www.nempk.cz/" target="_blank">
              <div className="odkaz-title">
                <img src="/img/pce-nemocnice.png" alt="Nemocnice Pardubického kraje" />
                <h5>Nemocnice Pardubického kraje</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/zdravotnik/dotace-zdravotnik")} href="https://dotace.pardubickykraj.cz/grants" target="_blank">
              <div className="odkaz-title">
                <img src="/img/dotace.png" alt="Dotace" />
                <h5>Dotace</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
