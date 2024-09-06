import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Zivot() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jak si poradit v životních situacích | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="zivotni-situacich">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Jak si poradit v životních situacích</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              Moji milí spoluobčané,
              <br /> zdravotnictví nás provází životem od našeho narození až po ukončení života. V průběhu let se setkáváme s mnoha situacemi, které se týkají zdraví nejen nás samotných, ale i našich blízkých a známých. Proto je vždy dobré mít všeobecný přehled o tom, co všechno nám může pomoct. V této brožuře najdete nejen základní rady, jak se zachovat a kam se obrátit, ale také podrobný adresář nejpotřebnějších zdravotnických a sociálních služeb. Nechybí ani pohotovosti, paliativní péče nebo kontakty na další pomáhající a spolupracující organizace v různých životních situacích. Přeji vám, abyste tuto knihu potřebovali co nejméně, ale pokud k tomu již dojde, aby vám byla vždy přínosem. S úctou Ing. Michaela Matoušková, MPA, MHA náměstkyně hejtmana zodpovědná za zdravotnictví.
            </p>
            <p>
              <a href="/Jak_si_poradit_v_zivotnich_situacich.pdf" target="_blank" className="link">
                <span data-content="Jak si poradit v životních situacích">Jak si poradit v životních situacích</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
