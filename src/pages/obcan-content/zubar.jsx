import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Zubar() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stomatologie a ortodoncie | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Stomatologie a ortodoncie</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Stomatologie</b> se zabývá prevencí, diagnostikou a léčbou onemocnění ústní dutiny a zubů. <br /> <b>Ortodoncie</b> je specializace stomatologie, která se zaměřuje na korekci nesprávného postavení zubů a čelistí pomocí rovnátek a dalších pomůcek.
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
