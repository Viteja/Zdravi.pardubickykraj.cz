import React from "react";
import "./lekar-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikLekar from "../../components/rozcestnik/rozcestnik-lekar";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Skoleni() {
  let navigate = useNavigate();
  const handleLinkClick = (path, id) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById(id) ? document.getElementById(id).offsetTop - 120 : 0,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nabídka školení | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Nabídka školení</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              <b>Nabídka odborných školení</b>, včetně akreditovaných. Podpora odborných dovednosti a znalostí. Získání nejenom potřebných kreditů pro další odborné rozvojové plány, ale také praktických dovedností, které mohou být nápomocny v poskytování ještě lepší zdravotní péče.
            </p>
            <div className="frend3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="frend-content">
                <h1>Nabídka Školení</h1>
                <h3>Nemocnice Padubického kraje</h3>
                <a className="primary-btn" href="https://kariera.nempk.cz/vzdelavani-v-npk" target="_blank">
                  Více informací
                </a>
              </div>
            </div>
            <div className="okresy">
              <a onClick={() => handleLinkClick("/zdravotnik/skoleni", "pardubice")} data-aos="fade-up">
                <div className="okresy-odkaz">
                  <img src="/img/pardubice_okres.png" alt="Okres Pardubice" />
                  <h5>Okres Pardubice</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/skoleni", "chrudim")} data-aos="fade-up" data-aos-delay="100">
                <div className="okresy-odkaz">
                  <img src="/img/chrudim_okres.png" alt="Okres Chrudim" />
                  <h5>Okres Chrudim</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/skoleni", "ustinadorlici")} data-aos="fade-up" data-aos-delay="200">
                <div className="okresy-odkaz">
                  <img src="/img/ustninadorlici_okres.png" alt="Okres Ústí nad Orlicí" />
                  <h5>Okres Ústí nad Orlicí</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/skoleni", "svitavy")} data-aos="fade-up" data-aos-delay="300">
                <div className="okresy-odkaz">
                  <img src="/img/svitavy_okres.png" alt="Okres Svitavy" />
                  <h5>Okres Svitavy</h5>
                </div>
              </a>
            </div>
            <div className="okres" id="pardubice" data-aos="fade-up">
              <h1>
                <span>Okres</span> Pardubice
              </h1>
              <div className="card2">
                <a href="https://rybitvi.cz/" className="card-title" target="_blank">
                  <h2>Rybitví</h2>
                </a>
                <h5>Léčebna dlouhodobě nemocných Rybitví</h5>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.ldn-rybitvi.cz/" className="link" target="_blank">
                        <span data-content="www.ldn-rybitvi.cz">www.ldn-rybitvi.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Školení pro neformální pečovatele – hygienická péče, polohování, dekubity v domácím prostředí, nutriční péče, legislativa v sociální sféře, rehabilitace v domácím prostředí</p>
                  </li>
                  <li>
                    <p>Odborné přednášky (lékař, sestra, fyzioterapeut) – na obecním úřadu Rybitví, v LDN Rybitví ( preventivní zdravotnické programy, interní, urologická problematika atd.)</p>
                  </li>
                  <li>
                    <p>Edukační dny – hygiena rukou, první pomoc</p>
                  </li>
                  <li>
                    <p>V přípravě máme kurz pro koordinátory dobrovolnické činnosti ve zdravotnictví</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="ustinadorlici" data-aos="fade-up">
              <h1>
                <span>Okres</span> Ústí nad Orlicí
              </h1>
              <div className="card2">
                <a href="https://www.vysoke-myto.cz/" className="card-title" target="_blank">
                  <h2>Vysoké mýto</h2>
                </a>
                <h5>Vysokomýtská nemocnice</h5>
                <ul>
                  <li>
                    <p>Vysokomýtská nemocnice má od MZ ČR akreditovaný kvalifikační kurz v oboru SANITÁŘ. Otevíráme tedy dvakrát do roka sanitářský kurz pro naše, ale i externí uchazeče</p>
                  </li>
                  <li>
                    <p>Našim zaměstnancům nabízíme kurzy a školení pořádané nemocnicí, realizujeme supervize, nabízíme možnost psychologické konzultace</p>
                  </li>
                  <li>
                    <p>Provozujeme půjčovnu kompenzačních pomůcek a s tím spojenou edukaci pečujících</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.zamberk.cz/" target="_blank" className="card-title">
                  <h2>Žamberk</h2>
                </a>
                <h5>Albertinum, odborný léčebný ústav, Žamberk</h5>
                <ul>
                  <li>
                    <p>
                      Nabízíme vzdělávání v již zmíněných 3 akreditovaných specializovaných oborech vzdělávání lékařů a{" "}
                      <a href="/NLZP_obory1.pdf" target="_blank">
                        {" "}
                        NLZP{" "}
                      </a>{" "}
                      na webových stránkách v sekci Kvalita
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://www.albertinum.cz/web/cs/kvalita/akreditace-pro-vzdelavani-lekaru-a-nlzp-71-80.html?tab_id=web" className="link" target="_blank">
                        <span data-content="https://www.albertinum.cz/web/cs/kvalita/akreditace-pro-vzdelavani-lekaru-a-nlzp">https://www.albertinum.cz/web/cs/kvalita/akreditace-pro-vzdelavani-lekaru-a-nlzp</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Akreditace pro vzdělávání lékařů a{" "}
                      <a href="/NLZP_obory1.pdf" target="_blank">
                        {" "}
                        NLZP
                      </a>
                      , ale sami organizujeme akreditované kurzy (například hrudní sonografie) Dále pořádáme množství odborných přednášek a konferencí pro širokou odbornou veřejnost.
                    </p>
                  </li>
                  <li>
                    <p>
                      Naše lékaře a{" "}
                      <a href="/NLZP_obory1.pdf" target="_blank">
                        {" "}
                        NLZP{" "}
                      </a>{" "}
                      aktivně posíláme na akreditované vzdělávací akce v rámci jiných institucí či kongresy
                    </p>
                  </li>
                  <li>
                    <p>Vzdělávání pro naše zaměstnance podporujeme ročně na úrovni více než milionu korun</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.mesto-brandys.cz/" className="card-title" target="_blank">
                  <h2>Brandýs nad Orlicí</h2>
                </a>
                <h5>Rehabilitační ústav Brandýs nad Orlicí</h5>
                <ul>
                  <li>
                    <p>
                      <a href="https://www.rehabilitacniustav.cz/" className="link" target="_blank">
                        <span data-content="www.rehabilitacniustav.cz">www.rehabilitacniustav.cz</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Svým zaměstnancům poskytujeme školení, akreditované i neakreditované</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="svitavy" data-aos="fade-up">
              <h1>
                <span>Okres</span> Svitavy
              </h1>
              <div className="card2">
                <a href="https://www.moravskatrebova.cz/" className="card-title" target="_blank">
                  <h2>Moravská Třebová</h2>
                </a>
                <h5>Nemocnice následné péče Moravská Třebová</h5>
                <ul>
                  <li>
                    <p>Nabídka školení akreditovaného i neakreditovaného</p>
                  </li>
                  <li>
                    <p>V našem zařízení je možnost vzdělávání a kariérního růstu.</p>
                    <ul>
                      <li>
                        <p>Specializační vzdělávání lékařů</p>
                      </li>
                      <li>
                        <p>
                          Specializační vzdělávání nebo zvyšování kvalifikace u{" "}
                          <a href="/NLZP_obory1.pdf" target="_blank">
                            {" "}
                            NLZP{" "}
                          </a>{" "}
                        </p>
                      </li>
                      <li>
                        <p>Akreditované kvalifikační kurzy, například sanitářské kurzy, Vojtovy metody u společnosti RL-CORPUS a zdravotní laborant – klinická biochemie, řidič zdravotnické dopravní služby, zdravotně sociální pracovník v akreditovaném zařízení NCO NZO Brno </p>
                      </li>
                      <li>
                        <p>certifikovaný kurz Dynamická neuromuskulární stabilizace v CPM Pavla Koláře v Praze, kurz systém Redcord Neurac 2 – dolní končetiny u společnosti Ahama, s.r.o. v HK aj.</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>Školení resuscitace, první pomoci, školení řidičů, manipulace se stravou a HACCP, počítačové vzdělávání aj.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
