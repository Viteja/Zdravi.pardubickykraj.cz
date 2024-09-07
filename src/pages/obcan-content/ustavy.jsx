import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";
import CookieConsent from "../../components/Cookies/cookies";

export default function Ustavy() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rehabilitační ústavy | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Rehabilitační ústavy</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="card2">
              <div className="card-title">
                <h2>
                  Hamzova léčebna <span>Luže - Košumberk</span>
                </h2>
              </div>
              <ul>
                <li>
                  <a href="https://www.hamzova-lecebna.cz/" className="link" target="_blank">
                    <span data-content="Hamzova odborná léčebna pro děti a dospělé (hamzova-lecebna.cz)">Hamzova odborná léčebna pro děti a dospělé (hamzova-lecebna.cz)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card2">
              <div className="card-title">
                <h2>
                  Rehabilitační ústav <span>Brandýs nad Orlicí</span>
                </h2>
              </div>
              <ul>
                <li>
                  <a href="https://www.rehabilitacniustav.cz/" className="link" target="_blank">
                    <span data-content="Rehabilitační ústav Brandýs nad Orlicí (rehabilitacniustav.cz)">Rehabilitační ústav Brandýs nad Orlicí (rehabilitacniustav.cz)</span>
                  </a>
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
