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

export default function Lekari() {
  return (
    <>
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Praktičtí lékaři | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Praktičtí lékaři</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Praktičtí lékaři</b> poskytují primární zdravotní péči, diagnostikují a léčí běžné nemoci, zranění i chronické stavy, provádějí preventivní prohlídky a očkování a v případě potřeby doporučují pacienty ke specialistům.
            </p>
            <div className="map">
              <iframe src="https://mapy.pardubickykraj.cz/app/map/uzis/" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
