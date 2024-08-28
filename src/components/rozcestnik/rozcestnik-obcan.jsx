import React from "react";
import { useNavigate } from "react-router-dom";
import "./rozcestnik.css";

export default function RozcestnikObcan() {
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
        <div className="obcan-title">
          <h5>Občan</h5>
          <h2>Rozcestník</h2>
        </div>
        <div className="rozcestnik-content" data-aos="fade-up">
          <div className="rozcestnik-menu">
            <a className={getClassName("/obcan/prakticti-lekari")} onClick={() => handleLinkClick("/obcan/prakticti-lekari", "semi")}>
              <div className="odkaz-title">
                <img src="/img/lekar.png" alt="Praktiční lékaři" />
                <h5>Praktičtí lékaři</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/stomatologie-a-ortodoncie")} onClick={() => handleLinkClick("/obcan/stomatologie-a-ortodoncie", "semi")}>
              <div className="odkaz-title">
                <img src="/img/zub.png" alt="Stomatologie a Ortodoncie" />
                <h5>Stomatologie a ortodoncie</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/pohotovosti")} onClick={() => handleLinkClick("/obcan/pohotovosti", "semi")}>
              <div className="odkaz-title">
                <img src="/img/pohotovost.png" alt="Pohotovosti" />
                <h5>Pohotovosti</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className="odkaz" href="https://www.zzspak.cz" target="_blank">
              <div className="odkaz-title">
                <img src="/img/abmulance.png" alt="Zdravotnická záchranná služba Pardubického kraje" />
                <h5>Zdravotnická záchranná služba</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/lecebny-dlouhodobe-nemocnych")} onClick={() => handleLinkClick("/obcan/lecebny-dlouhodobe-nemocnych", "semi")}>
              <div className="odkaz-title">
                <img src="/img/pece.png" alt="Léčebny dlouhodobě nemocných" />
                <h5>Léčebny dlouhodobě nemocných</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className="odkaz" href="https://mzd.gov.cz/jak-najit-lekare/" target="_blank">
              <div className="odkaz-title">
                <img src="/img/najit.png" alt="Jak najít lékaře" />
                <h5>Jak najít lékaře</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/pratelska-nemocnice")} href="https://www.nempk.cz/informace/pratelska-nemocnice" target="_blank">
              <div className="odkaz-title">
                <img src="/img/nemocnice.png" alt="Přátelská nemocnince" />
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
            <a className={getClassName("/obcan/jak-si-poradit-v-zivotnich-situacich")} onClick={() => handleLinkClick("/obcan/jak-si-poradit-v-zivotnich-situacich", "semi")}>
              <div className="odkaz-title">
                <img src="/img/zivot.png" alt="Jak si poradit v životních situacích" />
                <h5>Jak si poradit v životních situacích</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <div className="rozcestnik-menu">
            <a className={getClassName("/obcan/zdravotni-pojistovny")} onClick={() => handleLinkClick("/obcan/zdravotni-pojistovny", "semi")}>
              <div className="odkaz-title">
                <img src="/img/pojistovna.png" alt="Zdravotní pojišťovny" />
                <h5>Zdravotní pojišťovny</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className="odkaz" href="https://www.pardubickykraj.cz/zrizovane-a-zakladane-organizace-v-oblasti-zdravotnictvi" target="_blank">
              <div className="odkaz-title">
                <img src="/img/organizace.png" alt="Zdravotnictví zřizované Pardubickým krajem" />
                <h5>Zdravotnictví zřizované Pardubickým krajem</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/zdravotnicke-skoly")} onClick={() => handleLinkClick("/obcan/zdravotnicke-skoly", "semi")}>
              <div className="odkaz-title">
                <img src="/img/skoleni.png" alt="Zdravotnické školy v Pardubickém kraji" />
                <h5>Zdravotnické školy v Pardubickém kraji</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className="odkaz" href="https://dotace.pardubickykraj.cz/grants" target="_blank">
              <div className="odkaz-title">
                <img src="/img/dotace.png" alt="Dotace" />
                <h5>Dotace</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/rehabilitacni-ustavy")} onClick={() => handleLinkClick("/obcan/rehabilitacni-ustavy", "semi")}>
              <div className="odkaz-title">
                <img src="/img/rehab.png" alt="Rehabilitační ústav" />
                <h5>Rehabilitační ústavy</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/co-delame-pro-zlepseni-krajskeho-zdravotnictvi")} onClick={() => handleLinkClick("/obcan/co-delame-pro-zlepseni-krajskeho-zdravotnictvi", "semi")}>
              <div className="odkaz-title">
                <img src="/img/kraj.png" alt="Co děláme pro zlepšení zdravotnictví" />
                <h5>Co děláme pro zlepšení zdravotnictví</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className="odkaz" href="https://bezlepkupocesku.cz/" target="_blank">
              <div className="odkaz-title">
                <img src="/img/jidlo.png" alt="Potravinová intolerance" />
                <h5>Potravinová intolerance</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
            <a className={getClassName("/obcan/detska-centra")} onClick={() => handleLinkClick("/obcan/detska-centra-zdravotni-pece-o-nejmensi", "semi")}>
              <div className="odkaz-title">
                <img src="/img/deti.png" alt="Dětská centra" />
                <h5>Dětská centra - zdravotní péče o nejmenší</h5>
              </div>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
