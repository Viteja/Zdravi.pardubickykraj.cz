import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
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

  const navLogo = (path) => {
    return location.pathname.startsWith(path) ? "blue-logo" : "red-logo";
  };

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <a onClick={() => handleClickScroll("home")}>
                <div className="footer-title">
                  <img src="/img/pcelogo.webp" alt="Pardubický kraj Logo" draggable="false" />
                  <h2>
                    Zdravi.<span className={navLogo("/zdravotnik")}>pardubickykraj.cz</span>
                  </h2>
                </div>
              </a>
              <div className="footer-text">
                <p>
                  <span>Znáte důležité informace ze zdravotnictví</span>, které by mohly být přínosné pro ostatní? Jste z obcí a měst, které nabízí benefity pro zdravotníky a nejste zde uvedeni, <span>napište nám</span>. Vaše zpětná vazba je pro nás důležitá. E-mail: <span>zdravi@pardubickykraj.cz</span>
                </p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-obcan">
                <h5>Občan</h5>
                <div className="footer-menu">
                  <a onClick={() => handleLinkClick("/obcan/prakticti-lekari", "semi")}>
                    <span data-content="Praktičtí lékaři">Praktičtí lékaři</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/stomatologie-a-ortodoncie", "semi")}>
                    <span data-content="Stomatologie a ortodoncie">Stomatologie a ortodoncie</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/lecebny-dlouhodobe-nemocnych", "semi")}>
                    <span data-content="Léčebny dlouhodobě nemocných">Léčebny dlouhodobě nemocných</span>
                  </a>
                  <a href="https://www.nempk.cz/informace/pratelska-nemocnice" target="_blank">
                    <span data-content="Přátelská nemocnice">Přátelská nemocnice</span>
                  </a>
                </div>
                <div className="footer-menu">
                  <a onClick={() => handleLinkClick("/obcan/dotace", "semi")}>
                    <span data-content="Dotace">Dotace</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/pohotovosti", "semi")}>
                    <span data-content="Pohotovosti">Pohotovosti</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/duchod", "semi")}>
                    <span data-content="Důchod">Důchod</span>
                  </a>
                  <a href="https://www.uradprace.cz/web/cz/pomoc-pro-obcany-ukrajiny-a-jejich-zamestnavatele" target="_blank">
                    <span data-content="Občan Ukrajiny + info pro zaměstnavatele">Občan Ukrajiny + info pro zaměstnavatele</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/mapa", "semi")}>
                    <span data-content="Vyhledejte si svého lékaře">Vyhledejte si svého lékaře</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/zdravotni-pojistovny", "semi")}>
                    <span data-content="Zdravotní pojišťovny">Zdravotní pojišťovny</span>
                  </a>
                  <a href="https://www.zzspak.cz" target="_blank">
                    <span data-content="Zdravotnická záchranná služba">Zdravotnická záchranná služba</span>
                  </a>
                  <a href="https://mzd.gov.cz/jak-najit-lekare/" target="_blank">
                    <span data-content="Jak najít lékaře">Jak najít lékaře</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/zdravotnicke-skoly", "semi")}>
                    <span data-content="Zdravotnické školy v Pardubickém kraji">Zdravotnické školy v Pardubickém kraji</span>
                  </a>
                  <a onClick={() => handleLinkClick("/obcan/detska-centra-zdravotni-pece-o-nejmensi", "semi")}>
                    <span data-content="Dětská centra - zdravotní péče o nejmenší">Dětská centra - zdravotní péče o nejmenší</span>
                  </a>
                  <a href="https://www.rehabilitacniustav.cz/" target="_blank">
                    <span data-content="Rehabilitační ústav">Rehabilitační ústav</span>
                  </a>
                  <a href="https://www.nempk.cz/" target="_blank">
                    <span data-content="Nemocnice Pardubického kraje">Nemocnice Pardubického kraje</span>
                  </a>
                  <a href="https://www.pardubickykraj.cz/zrizovane-a-zakladane-organizace-v-oblasti-zdravotnictvi" target="_blank">
                    <span data-content="Zdravotnická zařízení zakládaná a zřizovaná">
                      Zdravotnická zařízení zakládaná a zřizovaná <br />
                      Pardubickým krajem
                    </span>
                  </a>
                </div>
              </div>
              <div className="footer-lekar">
                <h5>Zdravotník</h5>
                <div className="footer-menu">
                  <a onClick={() => handleLinkClick("/zdravotnik/naborove-prispevky", "semi")}>
                    <span data-content="Náborové příspěvky">Náborové příspěvky</span>
                  </a>
                  <a onClick={() => handleLinkClick("/zdravotnik/benefity-mest-a-obci", "semi")}>
                    <span data-content="Benefity měst a obcí">Benefity měst a obcí</span>
                  </a>
                  <a onClick={() => handleLinkClick("/zdravotnik/staze", "semi")}>
                    <span data-content="Nabídka stáží">Nabídka stáží</span>
                  </a>
                  <a onClick={() => handleLinkClick("/zdravotnik/skoleni", "semi")}>
                    <span data-content="Nabídka školení">Nabídka školení</span>
                  </a>
                </div>
                <div className="footer-menu">
                  <a onClick={() => handleLinkClick("/zdravotnik/dotace-zdravotnik", "semi")}>
                    <span data-content="Dotace">Dotace</span>
                  </a>
                  <a href="https://www.nempk.cz/informace/pratelska-nemocnice" target="_blank">
                    <span data-content="Přátelská nemocnice">Přátelská nemocnice</span>
                  </a>
                  <a onClick={() => handleLinkClick("/zdravotnik/kariera", "semi")}>
                    <span data-content="Kariéra">Kariéra</span>
                  </a>
                  <a href="https://www.nempk.cz/" target="_blank">
                    <span data-content="Nemocnice Pardubického kraje">Nemocnice Pardubického kraje</span>
                  </a>
                </div>
              </div>
              <div className="footer-useful">
                <h5>Užitečné odkazy</h5>
                <div className="footer-menu">
                  <a href="https://www.pardubickykraj.cz/" target="_blank">
                    <span data-content="www.pardubickykraj.cz">www.pardubickykraj.cz</span>
                  </a>
                  <a href="https://www.zachrankaapp.cz/" target="_blank">
                    <span data-content="www.zachrankaapp.cz">www.zachrankaapp.cz</span>
                  </a>
                  <a href="https://pardubice.nempk.cz/" target="_blank">
                    <span data-content="pardubice.nempk.cz">pardubice.nempk.cz</span>
                  </a>
                  <a href="https://ucitel.pardubickykraj.cz/" target="_blank">
                    <span data-content="ucitel.pardubickykraj.cz">ucitel.pardubickykraj.cz</span>
                  </a>
                  <a href="https://oceneni.pardubickykraj.cz/" target="_blank">
                    <span data-content="oceneni.pardubickykraj.cz">oceneni.pardubickykraj.cz</span>
                  </a>
                  <a href="https://doprava.pardubickykraj.cz/" target="_blank">
                    <span data-content="doprava.pardubickykraj.cz">doprava.pardubickykraj.cz</span>
                  </a>
                  <a href="https://sestra.pardubickykraj.cz/" target="_blank">
                    <span data-content="sestra.pardubickykraj.cz">sestra.pardubickykraj.cz</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="copyright">
              <p>@Zdravotnictvi.pardubickykraj.cz</p>
            </div>
            <div className="autor">
              <p>
                Created by{" "}
                <span>
                  <a href="https://designjj.cz/" target="_blank">
                    DesignJJ
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
