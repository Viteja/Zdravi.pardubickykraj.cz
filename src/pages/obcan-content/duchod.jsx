import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Duchod() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Důchod | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Důchod</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <h3>Pravidelná finanční podpora poskytovaná státem či zaměstnavatelem jednotlivcům. Náš systém eviduje několik druhů důchodů, a to:</h3>
            <p>
              <b>Starobní důchod:</b> Poskytován jednotlivcům po dosažení určitého věku (důchodový věk), jako odměna za jejich pracovní kariéru. <br />
              <b>Invalidní důchod:</b> Poskytován lidem, kteří kvůli invaliditě nebo zdravotnímu postižení nejsou schopni pracovat a získávat příjem. <br /> <b>Sirotčí důchod: </b>Poskytován sirotkům po ztrátě jednoho nebo obou rodičů, aby se zajistila jejich finanční podpora a péče. <br />
              <b> Vdovský/ vdovecký důchod:</b> Poskytován pozůstalým manželům po smrti jejich partnera, aby se zabezpečila jejich finanční situace. <br /> <b>Invalidní důchod pro dítě:</b> Poskytován dětem s invaliditou nebo zdravotním postižením, které o ně musí pečovat jejich rodiče nebo opatrovníci.
            </p>
            <p>
              <a href="https://www.cssz.cz/zadost-o-duchod-online" className="link" target="_blank">
                <span data-content="https://www.cssz.cz/zadost-o-duchod-online">https://www.cssz.cz/zadost-o-duchod-online</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
