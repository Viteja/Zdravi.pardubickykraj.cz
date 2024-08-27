import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Pece() {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Léčebny dlouhodobě nemocných | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Léčebny dlouhodobě nemocných</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <ul>
              <li>
                <p>Jedna ze složek tzv. „následné péče“ a jsou určené zejména pro doléčování pacientů, pro které už další pobyt na „akutním“ lůžku není žádným přínosem.</p>
              </li>
              <li>
                <p>Odborná zdravotnická zařízení, která jsou schopná zajistit tzv. „následnou péči“, včetně lékařské péče 24 hodin denně.</p>
              </li>
            </ul>
            <div className="okresy">
              <a onClick={() => handleLinkClick("/obcan/lecebny-dlouhodobe-nemocnych", "pardubice")} data-aos="fade-up">
                <div className="okresy-odkaz">
                  <img src="/img/parudibce_okres_red.png" alt="Okres Pardubice" />
                  <h5>Okres Pardubice</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/obcan/lecebny-dlouhodobe-nemocnych", "chrudim")} data-aos="fade-up" data-aos-delay="100">
                <div className="okresy-odkaz">
                  <img src="/img/chrudim_okres_red.png" alt="Okres Chrudim" />
                  <h5>Okres Chrudim</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/obcan/lecebny-dlouhodobe-nemocnych", "ustinadorlici")} data-aos="fade-up" data-aos-delay="200">
                <div className="okresy-odkaz">
                  <img src="/img/ustinadorlici_orkes_red.png" alt="Okres Ústí nad Orlicí" />
                  <h5>Okres Ústí nad Orlicí</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/obcan/lecebny-dlouhodobe-nemocnych", "svitavy")} data-aos="fade-up" data-aos-delay="300">
                <div className="okresy-odkaz">
                  <img src="/img/svitavy_okres_red.png" alt="Okres Svitavy" />
                  <h5>Okres Svitavy</h5>
                </div>
              </a>
            </div>
            <div className="okres" id="pardubice" data-aos="fade-up">
              <h1>
                <span>Okres</span> Pardubice
              </h1>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Nemocnice Pardubického kraje, a.s., Kyjevská 44, <span>Pardubice</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>zajišťuje Chrudimská nemocnice</p>
                  </li>
                  <li>
                    <p>
                      <a href="https://chrudim.nempk.cz/kliniky-a-pracoviste/luzka-nasledne-pece-ldn-dlouhodoba-intenzivni-osetrovatelska-pece-diop" className="link" target="_blank">
                        <span data-content="Lůžka následné péče (LDN)">Lůžka následné péče (LDN)</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Léčebna dlouhodobě nemocných <span>Rybitví</span>
                  </h2>
                </div>
                <h5>Pomoc imobilním osobám</h5>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.ldn-rybitvi.cz/" className="link" target="_blank">
                        <span data-content="www.ldn-rybitvi.cz">www.ldn-rybitvi.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Jsme zdravotnické zařízení následné péče, určené pro doléčování ... Rybitví, Činžovních domů 140</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="chrudim" data-aos="fade-up">
              <h1>
                <span>Okres</span> Chrudim
              </h1>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Nemocnice Pardubického kraje, a.s.- Václavská 570, <span>Chrudim</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="https://chrudim.nempk.cz/kliniky-a-pracoviste/luzka-nasledne-pece-ldn-dlouhodoba-intenzivni-osetrovatelska-pece-diop" className="link" target="_blank">
                        <span data-content="Lůžka následné péče (LDN)">Lůžka následné péče (LDN)</span>
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
                <div className="card-title">
                  <h2>
                    Vysokomýtská nemocnice, Hradecká 167 - <span>Vysoké Mýto</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.vmnemocnice.cz/index.php/oddleni-mainmenu-7/nasledna-luzkova-pece" className="link" target="_blank">
                        <span data-content="následná lůžková péče (vmnemocnice.cz)">následná lůžková péče (vmnemocnice.cz)</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    AESKULAP spol. s r.o. - <span>Červená Voda</span>
                  </h2>
                </div>
                <h5>Léčebný ústav Červená Voda</h5>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.aeskulap.cz" className="link" target="_blank">
                        <span data-content="www.aeskulap.cz">www.aeskulap.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Provoz léčebny dlouhodobě nemocných. Červená Voda 333</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Albertinum, odborný léčebný ústav - <span>Žamberk</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.albertinum.cz/web/cs" className="link" target="_blank">
                        <span data-content="www.albertinum.cz">www.albertinum.cz</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="svitavy" data-aos="fade-up">
              <h1>
                <span>Okres</span> Svitavy
              </h1>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Nemocnice Pardubického kraje, a.s - Kollárova 643/7, <span>Svitavy</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="https://svitavy.nempk.cz/kliniky-a-pracoviste/luzka-nasledne-pece-ldn" className="link" target="_blank">
                        <span data-content="Lůžka následné péče (LDN)">Lůžka následné péče (LDN)</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Poličská nemocnice, s.r.o., Eimova 294 - <span>Polička</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="http://www.azass.cz/?stranka=nemocnice" className="link" target="_blank">
                        <span data-content="AZASS">AZASS</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Nemocnice následné péče <span>Moravská Třebová</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.nnpmt.cz/" className="link" target="_blank">
                        <span data-content="www.nnpmt.cz">www.nnpmt.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Nemocnice poskytující následnou zdravotní péči. Moravská Třebová, Svitavská 480</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <div className="card-title">
                  <h2>
                    Nemocnice Pardubického kraje, a.s.- Zámecká 508, <span>Litomyšl</span>
                  </h2>
                </div>
                <ul>
                  <li>
                    <p>
                      <a href="https://litomysl.nempk.cz/kliniky-a-pracoviste/luzka-nasledne-pece-ldn" className="link" target="_blank">
                        <span data-content="Lůžka následné péče (LDN)">Lůžka následné péče (LDN)</span>
                      </a>
                    </p>
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
