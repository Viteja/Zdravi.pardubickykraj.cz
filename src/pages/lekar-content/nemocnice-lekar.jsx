import React from "react";
import "./lekar-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikLekar from "../../components/rozcestnik/rozcestnik-lekar";
import Btnup from "../../components/btnup/btnup";

export default function Nemocnice2() {
  return (
    <>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Přátelská nemocnice</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b> Důvěra a respekt – Odbornost a kvalita – Týmová spolupráce – Efektivita – Komunikace:</b> <br />
              Medicína je vnímána především jako poslání. A právě chování a jednání těch, co pečují o naše zdraví a přichází do přímého kontaktu s Vámi pacienty, má významnou roli v celkovém vnímání zdravotnictví, jako takového. Lékaři vám poskytnou odbornou péči, která se neobejde bez týmové práce. V našich příspěvkových organizací a Nemocnici Pardubického kraje se snažíme vytvářet takové prostředí, které bude přispívat k celkové spokojenosti Vás, pacientů a současně hrdosti lékařů a zdravotníků.
            </p>
            <p>
              <a href="https://www.nempk.cz/informace/pratelska-nemocnice" className="link" target="_blank">
                <span data-content="www.nempk.cz/informace/pratelska-nemocnice">www.nempk.cz/informace/pratelska-nemocnice</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
