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

export default function Deti() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dětská centra zdravotní péče o nejmenší | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="detsk,-centrum">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Dětská centra - zdravotní péče o nejmenší</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <ul>
              <li>
                <p>Poskytovatelé dlouhodobé a odlehčovací péče poskytované výhradně dětem. (Děti s život limitujícím a život ohrožujícím onemocněním, v paliativní péči.) Spolupráce s rodinami, které o tyto děti pečují doma, nebo hledají dobrou a profesionální zdravotní péči pro svoje dítě.</p>
              </li>
            </ul>
            <div className="card2">
              <div className="card-title">
                <h2>
                  Dětské centrum <span>Veská</span>
                </h2>
              </div>
              <ul>
                <li>
                  <p>
                    <a href="https://www.dcveska.cz/" className="link" target="_blank">
                      <span data-content="Dětské centrum Veská (dcveska.cz)">Dětské centrum Veská (dcveska.cz)</span>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>
                  Dětské centrum <span>Svitavy</span>
                </h2>
              </div>
              <ul>
                <li>
                  <p>
                    <a href="https://www.dc-svitavy.cz/" className="link" target="_blank">
                      <span data-content="Dětské centrum Svitavy – Pečujeme o těžce nemocné děti 24/7 (dc-svitavy.cz)">Dětské centrum Svitavy – Pečujeme o těžce nemocné děti 24/7 (dc-svitavy.cz)</span>
                    </a>
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
