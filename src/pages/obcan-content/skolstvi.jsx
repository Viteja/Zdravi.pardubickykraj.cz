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

export default function Skolstvi() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zdravotnické školy | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Zdravotnické školy v Pardubickém kraji</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="card2">
              <div className="card-title">
                <h2>Střední zdravotnická škola Pardubice</h2>
              </div>
              <ul>
                <li>
                  <p>
                    <a href="https://www.google.com/maps/place/St%C5%99edn%C3%AD+zdravotnick%C3%A1+%C5%A1kola+Pardubice/@50.0223423,15.8027492,17z/data=!3m1!4b1!4m6!3m5!1s0x470dcc701aac11b1:0x6dbcac31689b8082!8m2!3d50.0223423!4d15.8053241!16s%2Fg%2F1vd74mt3!5m1!1e4?coh=219816&entry=tts&g_ep=EgoyMDI0MDgxNC4xKgBIAVAD" className="link" target="_blank">
                      <span data-content="Průmyslová 395, Pardubičky, 530 03 Pardubice">Průmyslová 395, Pardubičky, 530 03 Pardubice</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://szs-pardubice.cz" className="link" target="_blank">
                      <span data-content="Střední zdravotnická škola Pardubice | SZŠ Pardubice szs-pardubice.cz">Střední zdravotnická škola Pardubice | SZŠ Pardubice szs-pardubice.cz</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>E-mail: monika.maslova@szs-pardubice.cz</p>
                </li>
                <li>
                  <p>Ředitelka školy: Mgr. Monika Máslová, tel.: 466 050 215</p>
                </li>
                <li>
                  <p>Obecné informace: ivana.rehorova@szs-pardubice.cz</p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Střední škola zdravotnická a sociální Chrudim</h2>
              </div>
              <ul>
                <li>
                  <p>
                    <a href="https://www.google.com/maps/place/St%C5%99edn%C3%AD+zdravotnick%C3%A1+%C5%A1kola/@49.9544865,15.7893378,17z/data=!3m1!4b1!4m6!3m5!1s0x470dca3cf9c518b5:0xf9c452cee723a841!8m2!3d49.9544865!4d15.7919127!16s%2Fg%2F1thcr1dm!5m1!1e4?coh=219816&entry=tts&g_ep=EgoyMDI0MDgxNC4xKgBIAVAD" className="link" target="_blank">
                      <span data-content="Chrudim, Poděbradova 336, PSČ 537 01">Chrudim, Poděbradova 336, PSČ 537 01</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://szs.chrudim.cz/" className="link" target="_blank">
                      <span data-content="Střední škola zdravotnická a sociální Chrudim">Střední škola zdravotnická a sociální Chrudim</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>Ředitelka školy: Mgr. Jana Zemanová</p>
                </li>
                <li>
                  <p>E-mail: zemanova@szs.chrudim.cz, tel: 461 353 264</p>
                </li>
                <li>
                  <p>Obecné informace: szs@chrudim.cz</p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Vyšší odborná škola a střední škola zdravotnická a sociální Ústí nad Orlicí</h2>
              </div>
              <ul>
                <li>
                  <p>
                    <a href="https://www.google.com/maps/place/Vy%C5%A1%C5%A1%C3%AD+odborn%C3%A1+%C5%A1kola+a+st%C5%99edn%C3%AD+%C5%A1kola+zdravotnick%C3%A1+a+soci%C3%A1ln%C3%AD+%C3%9Ast%C3%AD+nad+Orlic%C3%AD/@49.972734,16.39873,17z/data=!3m1!4b1!4m6!3m5!1s0x470defcb0bb9680b:0x235a748a624c9d9b!8m2!3d49.972734!4d16.39873!16s%2Fg%2F1thr5x7t!5m1!1e4?entry=ttu" className="link" target="_blank">
                      <span data-content="Smetanova 838, Ústí nad Orlicí, 562 01">Smetanova 838, Ústí nad Orlicí, 562 01</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.szsuo.cz" className="link" target="_blank">
                      <span data-content="www.szsuo.cz">www.szsuo.cz</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>Ředitelka školy: Mgr. Marie Klementová</p>
                </li>
                <li>
                  <p>E-mail: klementovam@szsuo.cz, tel.: 465 521 292/3</p>
                </li>
                <li>
                  <p>Obecné informace: szsuo@szsuo.cz</p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>Univerzita Pardubice - Fakulta zdravotnických studií</h2>
              </div>
              <ul>
                <li>
                  <p>
                    <a href="https://www.google.com/maps/place/Univerzita+Pardubice+-+Fakulta+zdravotnick%C3%BDch+studi%C3%AD/@50.0223419,15.8004531,17z/data=!3m1!4b1!4m6!3m5!1s0x470dcc701000df6f:0x5dfc83a7cb9621e8!8m2!3d50.022342!4d15.805324!16s%2Fg%2F122vlgbv!5m1!1e4?coh=219816&entry=tts&g_ep=EgoyMDI0MDgxNC4xKgBIAVAD" className="link" target="_blank">
                      <span data-content="Průmyslová 395, 532 10 Pardubice">Průmyslová 395, 532 10 Pardubice</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://fzs.upce.cz/" className="link" target="_blank">
                      <span data-content="UPCE">UPCE</span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>Děkan Fakulty zdravotnických studií: doc. RNDr. ThLic. Karel Sládek, Ph.D., MBA</p>
                </li>
                <li>
                  <p>E-mail: karel.sladek@upce.cz</p>
                </li>
                <li>
                  <p>Studijní oddělení: e-mail: studijni.fzs@upce.cz, tel.: 466 037 726</p>
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
