import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import CookieConsent from "../../components/Cookies/cookies";

export default function Nemocnice() {
  return (
    <>
      <CookieConsent />
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Přátelská nemocnice</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <ul>
              <li>
                <p>
                  <b> Důvěra a respekt – Odbornost a kvalita – Týmová spolupráce – Efektivita – Komunikace:</b> <br />
                  Medicína je vnímána především jako poslání. A právě chování a jednání těch, co pečují o naše zdraví a přichází do přímého kontaktu s Vámi pacienty, má významnou roli v celkovém vnímání zdravotnictví, jako takového. Lékaři vám poskytnou odbornou péči, která se neobejde bez týmové práce. V našich příspěvkových organizací a Nemocnici Pardubického kraje se snažíme vytvářet takové prostředí, které bude přispívat k celkové spokojenosti Vás, pacientů a současně hrdosti lékařů a zdravotníků.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.nempk.cz/informace/pratelska-nemocnice" className="link" target="_blank">
                    <span data-content="https://www.nempk.cz/informace/pratelska-nemocnice">https://www.nempk.cz/informace/pratelska-nemocnice</span>
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
