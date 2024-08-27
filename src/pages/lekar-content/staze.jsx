import React from "react";
import "./lekar-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikLekar from "../../components/rozcestnik/rozcestnik-lekar";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Staze() {
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
        <title>Nabídka stáží | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Nabídka stáží</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Nabídka stáží</b> je způsob, jakým firmy a organizace poskytují studentům a absolventům příležitost získat praktické zkušenosti ve svém oboru. Stáže jsou důležitým mostem mezi vzděláváním a pracovním trhem, umožňují mladým lidem aplikovat své teoretické znalosti v reálném prostředí a získat cenné dovednosti.
            </p>
            <div className="frend2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="frend-content">
                <h1>Nabídka stáží</h1>
                <h3>Nemocnice Padubického kraje</h3>
                <a className="primary-btn" href="https://www.nempk.cz/informace/absolventi" target="_blank">
                  Více informací
                </a>
              </div>
            </div>
            <div className="okresy">
              <a onClick={() => handleLinkClick("/zdravotnik/staze", "pardubice")} data-aos="fade-up">
                <div className="okresy-odkaz">
                  <img src="/img/pardubice_okres.png" alt="Okres Pardubice" />
                  <h5>Okres Pardubice</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/staze", "chrudim")} data-aos="fade-up" data-aos-delay="100">
                <div className="okresy-odkaz">
                  <img src="/img/chrudim_okres.png" alt="Okres Chrudim" />
                  <h5>Okres Chrudim</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/staze", "ustinadorlici")} data-aos="fade-up" data-aos-delay="200">
                <div className="okresy-odkaz">
                  <img src="/img/ustninadorlici_okres.png" alt="Okres Ústí nad Orlicí" />
                  <h5>Okres Ústí nad Orlicí</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/staze", "svitavy")} data-aos="fade-up" data-aos-delay="300">
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
                        <span data-content="www.ldn-rybitvi.cz/">www.ldn-rybitvi.cz/</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>V LDN mohou žádat o tzv. stáž pouze žadatelé, způsobilí k výkonu zdravotnického povolání na území ČR, studenti zdravotnických oborů v ČR a dále žadatelé o stáže v nezdravotnických provozech LDN Rybitví. Všeobecné sestry, zdravotně sociální obory, praktické sestry, ošetřovatelky, sanitáři a sanitářky to jsou obory, kterým můžeme vyjít vstříc</p>
                  </li>
                  <li>
                    <p>Nejsme akreditované zařízení pro výuku lékařů</p>
                  </li>
                  <li>
                    <p> Také jsme otevřeni možnostem stáží pro neformální pečovatele, rodinné pečovatele a pro pracovníky v sociálních službách.</p>
                  </li>
                  <li>
                    <p>
                      <span className="bold">Kognitivní rehabilitace</span> – Zde jsou určené stáže pro pracovníky v sociálních službách a pro kolegy z LDN i Nemocnic následné péče
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="bold">Institut spánkové medicíny</span> - V této naší ambulanci mohou svou stáž provést lékaři před zkouškou v uvedeném oboru, a také technici, připravující se na činnost ve spánkových laboratořích. Náš institut je určen pacientům s poruchami dýchání ve spánku
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="bold">Oddělení zdravotně sociálních pracovnic</span> – Zde nabízíme dlouhodobě úspěšné a žádané stáže studentům z našeho oboru
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
                    <p>Na základě smlouvy se vzdělávacími zařízeními (střední školy, univerzity) realizujeme stáže studentů nelékařských zdravotnických povolání, především ve studijních oborech praktická a všeobecná sestra, ošetřovatelka, zdravotně – sociální pracovník a radiodiagnostických asistent</p>
                  </li>
                  <li>
                    <p>Na oddělení jednodenní chirurgie poskytujeme stáž externím lékařům v dané odbornosti, opět na základě písemné smlouvy</p>
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
                      <a href="https://www.albertinum.cz/web/cs/kvalita/akreditace-pro-vzdelavani-lekaru-a-nlzp-71-80.html?tab_id=web" className="link" target="_blank">
                        <span data-content="www.albertinum.cz/web/cs/kvalita/akreditace-pro-vzdelavani-lekaru-a-nlzp">www.albertinum.cz/web/cs/kvalita/akreditace-pro-vzdelavani-lekaru-a-nlzp</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Nabízíme specializační stáže pro lékaře a{" "}
                      <a href="/NLZP_obory1.pdf" target="_blank">
                        {" "}
                        NLZP{" "}
                      </a>{" "}
                      v akreditovaných oborech (pneumologie a ftizeologie, psychiatrie, klinická psychologie) a zažádáno máme na o akreditaci pro vzdělávání v oboru Paliativní medicína. Lékařům i{" "}
                      <a href="/NLZP_obory1.pdf" target="_blank">
                        {" "}
                        NLZP{" "}
                      </a>{" "}
                      je možné absolvovat stáže na vyšších pracovištích v příslušných oborech, se kterými spolupracujeme (Thomayerova nemocnice Praha, FN Hradec Králové, FN Brno, FN Olomouc, NPK a.s.)
                    </p>
                  </li>
                  <li>
                    <p>
                      V případě
                      <a href="/NLZP_obory1.pdf" target="_blank">
                        {" "}
                        NLZP{" "}
                      </a>
                      úzce spolupracujeme se zdravotnickými školami v Pardubickém a Královéhradeckém kraji a umožňujeme studentům/studentkám těchto škol praxi/stáže na našich pracovištích ve všech čtyřech námi poskytovaných lůžkových odbornostech
                    </p>
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
                        <span data-content="www.rehabilitacniustav.cz">www.rehabilitacniustav.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Spolupracuje se zdravotnickými zařízeními, které poskytují stejné zdravotní služby, například v Kladrubech nebo v Hrabyni, kde nabízíme našim zaměstnancům odborné stáže</p>
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
                <ul>
                  <li>
                    <p>Vedení nemocnice je vstřícné k realizaci stáží dle individuální dohody</p>
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
