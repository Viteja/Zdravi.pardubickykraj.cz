import React from "react";
import "./lekar-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikLekar from "../../components/rozcestnik/rozcestnik-lekar";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Prispevky() {
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
        <title>Náborové příspěvky | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Náborové příspěvky</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Náborový příspěvek</b> je jedna z mnoha výhod, která nový zaměstnavatel pro své zaměstnance nabízí. Je důležité, aby zájemci byli informováni také o jednotlivých benefitech, jako jsou bonusy, možnosti kariérního růstu nebo školení a celkový rozvoj u svého případně nového zaměstnavatele.
            </p>
            <div className="okresy">
              <a onClick={() => handleLinkClick("/zdravotnik/naborove-prispevky", "pardubice")} data-aos="fade-up">
                <div className="okresy-odkaz">
                  <img src="/img/pardubice_okres.png" alt="Okres Pardubice" />
                  <h5>Okres Pardubice</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/naborove-prispevky", "chrudim")} data-aos="fade-up" data-aos-delay="100">
                <div className="okresy-odkaz">
                  <img src="/img/chrudim_okres.png" alt="Okres Chrudim" />
                  <h5>Okres Chrudim</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/naborove-prispevky", "ustinadorlici")} data-aos="fade-up" data-aos-delay="200">
                <div className="okresy-odkaz">
                  <img src="/img/ustninadorlici_okres.png" alt="Okres Ústí nad Orlicí" />
                  <h5>Okres Ústí nad Orlicí</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/naborove-prispevky", "svitavy")} data-aos="fade-up" data-aos-delay="300">
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
                <a href="https://rybitvi.cz/" className="card-title" target="_blank">
                  <h2>Rybitví</h2>
                </a>
                <h5>Léčebna dlouhodobě nemocných Rybitví</h5>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.ldn-rybitvi.cz/" className="link" target="_blank">
                        <span data-content="www.ldn-rybitvi.cz">www.ldn-rybitvi.cz</span>
                      </a>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>Léčebna dlouhodobě nemocných Rybitví v současné době nenabízí náborový příspěvek pro žádný obor</p>
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
                    <p>Neposkytujeme náborový příspěvek pro žádný obor</p>
                  </li>
                  <li>
                    <p>Po zapracování přiděluje zaměstnanci osobní ohodnocení a benefity</p>
                  </li>
                  <li>
                    <p>Při dobrých pracovních výsledcích dostává zaměstnanec odměny a to dvakrát do roka</p>
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
                    <p>
                      <a href="https://www.albertinum.cz/" className="link" target="_blank">
                        <span data-content="www.albertinum.cz">www.albertinum.cz</span>
                      </a>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>Náborové příspěvky: Každý rok aktualizujeme „Bonusový program pro nově příchozí zdravotnické pracovníky“</p>
                    <ul>
                      <li>
                        <p>V případě lékařů se jedná o nižší stovky tisíc korun, dle dosaženého vzdělání</p>
                      </li>
                      <li>
                        <p>V případě NLZP (sanitářka, praktická a všeobecná sestra, fyzioterapeut, klinický logoped či psycholog, psycholog ve zdravotnictví). Dle pozice se jedná o desítky tisíc korun</p>
                      </li>
                      <li>
                        <p>Tyto cílové částky jsou poskytovány postupně ve třech termínech, a to po 3 měsících od uzavření PP, dále po 12 a po 24 měsících</p>
                      </li>
                      <li>
                        <p>Bonusy jsou vázány k pracovnímu úvazku 1,0 a krátí se v případě nižších úvazků či dohod</p>
                      </li>
                      <li>
                        <p>Obdobný finanční benefit: v závislosti na úrovní pracovního výkonu možnost přiznání osobního příplatku dle příslušného ustanovení ZP a v případě dobrého hospodaření také čtvrtletní mimořádné odměny</p>
                      </li>
                      <li>
                        <p>Konkrétní informace při osobním jednání</p>
                      </li>
                    </ul>
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
                    <p>
                      <a href="https://www.rehabilitacniustav.cz/" className="link" target="_blank">
                        <span data-content="www.rehabilitacniustav.cz/">www.rehabilitacniustav.cz/</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Náborové příspěvky: poskytovány u vybraných pozic – fyzioterapeut, klinický logoped, klinický psycholog</p>
                    <ul>
                      <li>
                        <p>80 000 Kč/úvazek 1,0 při trvání PP nad 12 měsíců</p>
                      </li>
                      <li>
                        <p>100 000 Kč/úvazek 1,0 při trvání PP nad 36 měsíců</p>
                      </li>
                    </ul>
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
                <h5>Nemocnice následné péče Moravská Třebová</h5>
                <p>
                  <a href="https://www.nnpmt.cz/" className="link" target="_blank">
                    <span data-content="www.nnpmt.cz">www.nnpmt.cz</span>
                  </a>
                </p>
                <ul>
                  <li>
                    <p>Pouze u lékaře v podobě nabídky možnosti ubytování v mezotenovém bytu v historickém centru Moravské Třebové</p>
                  </li>
                  <li>
                    <p>Nadstandartní finanční ocenění</p>
                  </li>
                  <li>
                    <p>U všech zaměstnanců příspěvky na stravování, příspěvek na penzijné připojištění</p>
                  </li>
                  <li>
                    <p>Kulturní a společenská akce organizované zaměstnavatelem</p>
                  </li>
                  <li>
                    <p>Sociální výpomoc a půjčka ve výši 25 000 Kč</p>
                  </li>
                  <li>
                    <p>Půjčka na bytové účely ve výši 25 000 Kč + příspěvek na vybavení bydlení</p>
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
