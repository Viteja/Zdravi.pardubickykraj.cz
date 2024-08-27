import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Pohotovosti() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pohotovosti | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Pohotovosti</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Lékařské pohotovosti</b> poskytují urgentní zdravotní péči pacientům s náhlými zdravotními problémy nebo úrazy. (mimo běžné ordinační hodiny) Při Zdravotnické záchranné službě Pardubického kraje je zřízeno Informační zdravotnické centrum. Po zavolání na příslušnou linku je možno konzultovat zdravotní stav s operátory, kteří jsou připraveni poradit s dalším postupem. Nonstop telefonní linky:{" "}
              <a href="tel: 469666666" className="tel">
                469 666 666
              </a>{" "}
              nebo{" "}
              <a href="tel: 469666999" className="tel">
                469 666 999
              </a>
              .
            </p>
            <div className="pohotovosti" data-aos="fade-up">
              <div className="nemoc">
                <a href="https://www.nempk.cz/informace/pohotovost-v-pardubicich" target="_blank">
                  <h5>Pardubice</h5>
                </a>
              </div>
              <div className="nemoc">
                <a href="https://www.nempk.cz/informace/pohotovost-v-chrudimi" target="_blank">
                  <h5>Chrudim</h5>
                </a>
              </div>
              <div className="nemoc">
                <a href="https://www.nempk.cz/informace/pohotovost-a-urgentni-prijem-v-usti-nad-orlici" target="_blank">
                  <h5>Ústí nad Orlicí</h5>
                </a>
              </div>
              <div className="nemoc">
                <a href="https://www.nempk.cz/informace/pohotovost-v-litomysli" target="_blank">
                  <h5>Litomyšl</h5>
                </a>
              </div>
              <div className="nemoc">
                <a href="https://www.nempk.cz/informace/pohotovost-ve-svitavach" target="_blank">
                  <h5>Svitavy</h5>
                </a>
              </div>
              <div className="nemoc">
                <a href="https://www.nempk.cz/informace/stomatologicka-pohotovost-1" target="_blank">
                  <h5>Stomatologická pohotovost</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
