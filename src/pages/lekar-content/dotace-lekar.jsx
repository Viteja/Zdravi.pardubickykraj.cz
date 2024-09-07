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

export default function Dotace2() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dotace | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <button onClick={() => topFunction()} id="myBtn" title="Přesun nahoru">
        <i className="fas fa-angle-up"></i>
      </button>
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Dotace</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Dotace - </b>finanční podpora poskytovaná organizacím nebo jednotlivcům za účelem podpory konkrétních projektů či aktivit. Podpora je vždy spojena s jasně definovanými cíli a účelem. například zlepšení kvality života obyvatel, nebo zvýšení profesní způsobilosti a odbornosti.
            </p>
            <p>
              <a href="https://dotace.pardubickykraj.cz/grants" className="link" target="_blank">
                <span data-content="dotace.pardubickykraj.cz/grants">dotace.pardubickykraj.cz/grants</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
