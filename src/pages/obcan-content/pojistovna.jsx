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

export default function Pojistovna() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zdravotní pojišťovny | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Zdravotní pojišťovny</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="card2">
              <div className="card-title">
                <h2>Všeobecná zdravotní pojišťovna</h2>
              </div>
              <a href="https://www.vzp.cz/kontakty/pobocky/pardubice" className="link" target="_blank">
                <span data-content="Pardubice - VZP ČR">Pardubice - VZP ČR</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> Karla IV. 73 53002 Pardubice, tel.: <a href="tel: 952232111">952 232 111</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>CHRUDIM:</b> Havlíčkova 1053, 537 01 Chrudim, tel.: <a href="tel: 952222222">952 222 222</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>HLINSKO V ČECHÁCH:</b> Nádražní 548, 539 01 Hlinsko v Čechách
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Zdravotní pojišťovna Ministerstva vnitra</h2>
              </div>
              <a href="https://www.zpmvcr.cz/pracoviste/pobocka-pardubice" className="link" target="_blank">
                <span data-content="Pardubice | ZP MV ČR (zpmvcr.cz)">Pardubice | ZP MV ČR (zpmvcr.cz)</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> Nerudova 1668, Pardubice 530 02, tel.: <a href="tel: 495737388">495 737 388</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>CHRUDIM:</b> Novoměstská 960, 537 01, tel.: <a href="tel: 469622165">469 622 165</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Česká průmyslová zdravotní pojišťovna, a.s.</h2>
              </div>
              <a href="https://www.cpzp.cz/pobocky" className="link" target="_blank">
                <span data-content="ČPZP - Česká průmyslová zdravotní pojišťovna | Pobočky (cpzp.cz)">ČPZP - Česká průmyslová zdravotní pojišťovna | Pobočky (cpzp.cz)</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> nábř. Závodu míru 2740, 530 02 Pardubice I-Zelené Předměstí, Česko, tel.: <a href="tel: 469779702">469 779 702</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>CHRUDIM:</b> Poděbradova 184, 537 01 Chrudim- tel.: <a href="tel: 469622017">469 622 017</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>ÚSTÍ NAD ORLICÍ:</b> Lázeňská 354, 562 01 Ústí nad Orlicí, <a href="tel: 465323956">465 323 956</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>VYSOKÉ MÝTO:</b> Vrchlického 243, 566 01 Vysoké Mýto – Město, <a href="tel: 465382265">465 382 265</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>INFORMAČNÍ SERVIS:</b> <a href="tel: 810800000">810 800 000</a>, <a href="tel: 597089205">597 089 205</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Oborová zdravotní pojišťovna (OZP)</h2>
              </div>
              <a href="https://www.ozp.cz/" className="link" target="_blank">
                <span data-content="www.ozp.c/">www.ozp.cz</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> Hronovická 2761, Pardubice, tel.: <a href="tel: 236090000">236 090 000</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Vojenská zdravotní pojišťovna České republiky (VoZP)</h2>
              </div>
              <a href="https://www.vozp.cz/" className="link" target="_blank">
                <span data-content="www.vozp.cz">www.vozp.cz</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> 17. listopadu 237, Pardubice, tel.: <a href="tel: 466053511">466 053 511</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Revírní bratrská pokladna, zdravotní pojišťovna (RBP)</h2>
              </div>
              <a href="www.rbp-zp.cz" className="link" target="_blank">
                <span data-content="www.rbp-zp.cz">www.rbp-zp.cz</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> Tř. Míru 92, Pardubice, tel.: <a href="tel: 595191666">595 191 666</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Zdravotní pojišťovna Škoda</h2>
              </div>
              <a href="https://www.zpskoda.cz/" className="link" target="_blank">
                <span data-content="www.zpskoda.cz">www.zpskoda.cz</span>
              </a>
              <ul>
                <li>
                  <p>
                    <b>PARDUBICE:</b> Tř. Míru 90, Pardubice, tel.: <a href="tel: 312709709">312 709 709</a>
                  </p>
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
