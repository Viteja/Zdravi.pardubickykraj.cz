import React from "react";
import "./lekar-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikLekar from "../../components/rozcestnik/rozcestnik-lekar";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";
import CookieConsent from "../../components/Cookies/cookies";

export default function Kariera() {
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
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kariéra | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Kariéra - přidejte se k nám</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="frend" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="frend-content">
                <h1>Kariéra</h1>
                <h3>Nemocnice Padubického kraje</h3>
                <a className="primary-btn" href="https://kariera.nempk.cz/" target="_blank">
                  Více informací
                </a>
              </div>
            </div>
            <div className="okresy">
              <a onClick={() => handleLinkClick("/zdravotnik/kariera", "pardubice")} data-aos="fade-up">
                <div className="okresy-odkaz">
                  <img src="/img/pardubice_okres.png" alt="Okres Pardubice" />
                  <h5>Okres Pardubice</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/kariera", "chrudim")} data-aos="fade-up" data-aos-delay="100">
                <div className="okresy-odkaz">
                  <img src="/img/chrudim_okres.png" alt="Okres Chrudim" />
                  <h5>Okres Chrudim</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/kariera", "ustinadorlici")} data-aos="fade-up" data-aos-delay="200">
                <div className="okresy-odkaz">
                  <img src="/img/ustninadorlici_okres.png" alt="Okres Ústí nad Orlicí" />
                  <h5>Okres Ústí nad Orlicí</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/kariera", "svitavy")} data-aos="fade-up" data-aos-delay="300">
                <div className="okresy-odkaz">
                  <img src="/img/svitavy_okres.png" alt="Okres Svitavy" />
                  <h5>Okres Svitavy</h5>
                </div>
              </a>
            </div>
            <div className="okres" id="pardubice" data-aos="fade-up">
              <h1>
                <span>Okres</span> Pardubice
              </h1>
              <div className="card2">
                <a href="https://pardubice.eu/" target="_blank" className="card-title">
                  <h2>Pardubice</h2>
                </a>
                <h5>Zdravotnická záchranná služba Pardubického kraje</h5>
                <ul>
                  <li>
                    <p>Volná pozice: Lékař do výjezdové skupiny. Nabízíme možnost 1 x ročně jezdit na kurzy urgentní medicíny sloužící k prohlubování znalostí</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://rybitvi.cz/" className="card-title" target="_blank">
                  <h2>Rybitví</h2>
                </a>
                <h5>Léčebna dlouhodobě nemocných Rybitví</h5>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.ldn-rybitvi.cz/volna-mista" className="link" target="_blank">
                        <span data-content="www.ldn-rybitvi.cz/volna-mista">www.ldn-rybitvi.cz/volna-mista</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="ustinadorlici" data-aos="fade-up">
              <h1>
                <span>Okres</span> Ústí nad Orlicí
              </h1>
              <div className="card2">
                <a href="https://www.vysoke-myto.cz/" className="card-title" target="_blank">
                  <h2>Vysoké mýto</h2>
                </a>
                <h5>Vysokomýtská nemocnice</h5>
                <ul>
                  <li>
                    <p>Volné pracovní pozice aktualizujeme na webových stránkách:</p>
                  </li>
                  <li>
                    <p>
                      <a href="https://www.vmnemocnice.cz/index.php/nabidky-prace-nextmenu-14" className="link" target="_blank">
                        <span data-content="www.vmnemocnice.cz">www.vmnemocnice.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>S uchazeči o zaměstnání preferujeme osobní jednání</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.mesto-brandys.cz/" className="card-title" target="_blank">
                  <h2>Brandýs nad Orlicí</h2>
                </a>
                <h5>Rehabilitační ústav Brandýs nad Orlicí</h5>
                <ul>
                  <li>
                    <p>Současné volné pracovní pozice - V RÚ je určitě kariérní budoucnost, především s plánovaným rozšířením činnosti o kranioprogram. Jedná se především o lékařské a nelékařské pracovníky – lékaře, fyzioterapeuty, ergoterapeuty, všeobecné sestry, sanitáře, nebo maséry</p>
                  </li>
                  <li>
                    <p>
                      <a href="https://www.pracevbrandyse.cz/" className="link" target="_blank">
                        <span data-content="www.pracevbrandyse.cz">www.pracevbrandyse.cz</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.zamberk.cz/" target="_blank" className="card-title">
                  <h2>Žamberk</h2>
                </a>
                <h5>Albertinum, odborný léčebný ústav, Žamberk</h5>
                <ul>
                  <li>
                    <p>Aktuálně vždy k dispozici na webových stránkách v sekci volná místa</p>
                    <ul>
                      <li>
                        <p>
                          <a href="https://www.albertinum.cz/web/cs/verejnost/volnamista-57-65.html?tab_id=web" className="link" target="_blank">
                            <span data-content="www.albertinum.cz/web/cs/verejnost/volnamista">www.albertinum.cz/web/cs/verejnost/volnamista</span>
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>Preferujeme osobní jednání</p>
                  </li>
                  <li>
                    <p>Spolupracujeme s personálními agenturami</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="svitavy" data-aos="fade-up">
              <h1>
                <span>Okres</span> Svitavy
              </h1>
              <div className="card2">
                <a href="https://www.moravskatrebova.cz/" className="card-title" target="_blank">
                  <h2>Moravská Třebová</h2>
                </a>
                <h5>Zde naleznete 10 důvodů proč se stát našim zaměstnancem: </h5>
                <p>
                  <a href="https://www.nnpmt.cz/kariera/" className="link" target="_blank">
                    <span data-content="www.nnpmt.cz/kariera">www.nnpmt.cz/kariera</span>
                  </a>
                </p>
                <ul>
                  <li>
                    <p>Aktuálně poptáváme: </p>
                    <ul>
                      <li>
                        <p>Fyzioterapeut/ka</p>
                      </li>
                      <li>
                        <p>Lékař/ka na LDN</p>
                      </li>
                      <li>
                        <p>Všeobecná sestra</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
