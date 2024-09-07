import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";
import CookieConsent from "../../components/Cookies/cookies";

export default function Kraj() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Co děláme pro zlepšení krajského zdravotnictví | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Co děláme pro zlepšení krajského zdravotnictví</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="card3" data-aos="fade-up">
              <img src="/img/matouskova.jpg" alt="Michaela Matoušková" draggable="false" />
              <div className="card-content">
                <h3>ING. MICHAELA MATOUŠKOVÁ, MPA, MHA</h3>
                <p>náměstkyně hejtmana Pardubického kraje zodpovědná za zdravotnictví</p>
                <p className="primarec">„Naším hlavním cílem je zajistit kvalitní a dostupnou zdravotní péči pro všechny občany Pardubického kraje. Děláme maximum, aby se naši občané cítili bezpečně a měli důvěru v náš zdravotnický systém." </p>
              </div>
            </div>
          </div>
          <div className="semi-content" data-aos="fade-up">
            <h4>
              Odpovědi na Vaše <span>nejčastější dotazy:</span>
            </h4>
            <div className="card2">
              <div className="card-title">
                <h2>Investice do infrastruktury: </h2>
              </div>
              <ul>
                <li>
                  <p>Pravidelně investujeme do modernizace a rozšiřování zdravotnických zařízení. Naše Nemocnice Pardubického kraje je vybavena nejmodernějšími technologiemi.</p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Podpora zdravotnického personálu:</h2>
              </div>
              <ul>
                <li>
                  <p>Lékaři a sestry jsou srdcem našeho zdravotnictví. Přispíváme pravidelně na stabilizaci personálu a nábor nových zaměstnanců. Věříme, že motivovaný a dobře vyškolený personál je klíčem ke kvalitní péči.</p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Preventivní programy a osvěta:</h2>
              </div>
              <ul>
                <li>
                  <p>Preventivní programy a osvětu dělá Pardubický kraj prostřednictvím společnosti Nemocnice Pardubického kraje, a.s.</p>
                </li>
                <li>
                  <p>Prevence je nejlepší lék, a proto spustila NPK, a .s., řadu programů zaměřených na zdravý životní styl a prevenci nemocí, například organizací bezplatných screeningových akcí, které mohou včas odhalit vážná onemocnění. NPK, a .s. Nemocnice také organizují kampaně, které propagují zdravý životní styl. Chceme, aby každý z vás měl informace a nástroje, jak se starat o své zdraví.</p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Spolupráce s odborníky a institucemi:</h2>
              </div>
              <ul>
                <li>
                  <p>Úzce spolupracujeme s Univerzitou Pardubice a dalšími výzkumnými institucemi a odborníky, abychom zajistili, že zdravotnictví v našem kraji bude na nejvyšší možné úrovni. Podporujeme inovace a výzkum, které mohou přinést nové možnosti léčby a zlepšit kvalitu života našich pacientů.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
