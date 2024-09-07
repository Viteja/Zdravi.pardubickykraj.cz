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

export default function Benefity() {
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
      <CookieConsent />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Benefity měst a obcí | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="lekar">
        <RozcestnikLekar />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Benefity měst a obcí</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <p>
              Vedením <b>obcí a měst</b> schválené investice do nových, nebo modernějších prostor pro naše lékaře. Podpora výjimečné zdravotní péče v konkrétním regionu a zlepšení životních podmínek pro všechny místní občany.
            </p>
            <div className="okresy">
              <a onClick={() => handleLinkClick("/zdravotnik/benefity-mest-a-obci", "pardubice")} data-aos="fade-up">
                <div className="okresy-odkaz">
                  <img src="/img/pardubice_okres.png" alt="Okres Pardubice" />
                  <h5>Okres Pardubice</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/benefity-mest-a-obci", "chrudim")} data-aos="fade-up" data-aos-delay="100">
                <div className="okresy-odkaz">
                  <img src="/img/chrudim_okres.png" alt="Okres Chrudim" />
                  <h5>Okres Chrudim</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/benefity-mest-a-obci", "ustinadorlici")} data-aos="fade-up" data-aos-delay="200">
                <div className="okresy-odkaz">
                  <img src="/img/ustninadorlici_okres.png" alt="Okres Ústí nad Orlicí" />
                  <h5>Okres Ústí nad Orlicí</h5>
                </div>
              </a>
              <a onClick={() => handleLinkClick("/zdravotnik/benefity-mest-a-obci", "svitavy")} data-aos="fade-up" data-aos-delay="300">
                <div className="okresy-odkaz">
                  <img src="/img/svitavy_okres.png" alt="Okres Svitavy" />
                  <h5>Okres Svitavy</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="okres" id="pardubice" data-aos="fade-up">
              <h1>
                <span>Okres</span> Pardubice
              </h1>
              <div className="card2">
                <a href="https://pardubice.eu/" target="_blank" className="card-title">
                  <h2>Pardubice</h2>
                  <img src="/img/pardubice_znak.png" alt="Pardubice znak" draggable="false" />
                </a>
                <ul>
                  <li>
                    <h5>Zdravotnická záchranná služba Pardubického kraje</h5>
                    <ul>
                      <li>
                        <p>
                          <a href="https://www.zzspak.cz/" className="link" target="_blank">
                            <span data-content="www.zzspak.cz/">www.zzspak.cz/</span>
                          </a>
                        </p>
                      </li>
                      <li>
                        <p>Benefity: služební telefon, stravenky, příspěvek na důchodové spoření</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.chvaletice.cz/" target="_blank" className="card-title">
                  <h2>Chvaletice</h2>
                  <img src="/img/chvaletice_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Nyní se připravuje kompletní rekonstrukce ordinace pro nového lékaře pro děti a dorost.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="chrudim" data-aos="fade-up">
              <h1>
                <span>Okres</span> Chrudim
              </h1>
              <div className="card2">
                <a href="https://www.chrudim.eu/" target="_blank" className="card-title">
                  <h2>Chrudim</h2>
                  <img src="/img/chrudim_znak.svg" alt="" />
                </a>
                <ul>
                  <li>
                    <p>
                      „Obecné zásady pro přidělování bytů ve vlastnictví města Chrudim“ – Rada města Chrudim může rozhodnout o uzavření nájemní smlouvy k bytu ve vlastnictví města v případě naléhavé potřeby státních a justičních orgánů a státních organizací, které mají svá sídla v katastru města Chrudim – např. Policie ČR, státní zastupitelství, soudy, finanční úřad, nemocnice a zdravotnická zařízení apod. Dokument ke stažení:{" "}
                      <a href="https://www.chrudim.eu/wp-content/uploads/2023/10/Obecne-zasady-pro-pridelovani-bytu-14.pdf" className="link">
                        <span data-content="www.chrudim.eu/2023/10/Obecne-zasady-pro-pridelovani-bytu">www.chrudim.eu/2023/10/Obecne-zasady-pro-pridelovani-bytu</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.nasavrky.cz/" target="_blank" className="card-title">
                  <h2>Nasavrky</h2>
                  <img src="/img/nasavrky_znak.jpg" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Služební byt + další benefity v jednání.</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.morasice.cz/" target="_blank" className="card-title">
                  <h2>Morašice</h2>
                  <img src="/img/morasice_znak.jpg" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Půdní prostory k rekonstrukci na byt.</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.hlinsko.cz/" target="_blank" className="card-title">
                  <h2>Hlinsko v Čechách</h2>
                  <img src="/img/hlinsko.jpg" alt="" />
                </a>
                <h5>Je připraveno nabídnout příchozím stomatologům a pediatrům:</h5>
                <ul>
                  <li>
                    <p>dotační program na pořízení vybavení ordinace</p>
                  </li>
                  <li>
                    <p>jednání ohledně finančního podílu města na pořízení vybavení ordinace dle potřeb lékaře</p>
                  </li>
                  <li>
                    <p>bezúročnou půjčku</p>
                  </li>
                  <li>
                    <p>dvě nové ordinace, pro nově příchozí lékaře za výhodných podmínek</p>
                  </li>
                  <li>
                    <p>byt k užívání</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="ustinadorlici" data-aos="fade-up">
              <h1>
                <span>Okres</span> Ústí nad Orlicí
              </h1>
              <div className="card2">
                <a href="https://ustinadorlici.cz/" target="_blank" className="card-title">
                  <h2>Ústí nad Orlicí</h2>
                  <img src="/img/ustinadorlici.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>
                      Město Ústí nad Orlicí nabízí lékařům stabilizační byty v lokalitě sídliště Štěpnice a sídliště Dukla. Zde odkaz na Směrnici pro nakládání s byty ve vlastnictví města:{" "}
                      <a href="https://www.ustinadorlici.cz/images/2023/smernice-nakladani_byty_vlastnictvi_mesta.pdf" target="_blank" className="link">
                        <span data-content="smernice-nakladani_byty_vlastnictvi_mesta.pdf (ustinadorlici.cz)">smernice-nakladani_byty_vlastnictvi_mesta.pdf (ustinadorlici.cz)</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.klasterecnadorlici.cz/" target="_blank" className="card-title">
                  <h2>Klášterec nad Orlicí</h2>
                  <img src="/img/klaster_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Standardně vybavená lékařská ordinace pro praktického lékaře - zdarma</p>
                  </li>
                  <li>
                    <p>Výhodný pronájem bytu.</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.tatenice.cz/" target="_blank" className="card-title">
                  <h2>Tatenice</h2>
                  <img src="/img/tatenice_znak.svg" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Pro zubního, nebo dětského lékaře nevybavenou ordinaci a byt o velikosti 4+1 ve vile s garáží a zahradou.</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.dolnidobrouc.cz/" target="_blank" className="card-title">
                  <h2>Dolní Dobrouč</h2>
                  <img src="/img/Dolní_Dobrouč.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Finanční pomoc s odkoupením společnosti s. r. o. od stávajícího lékaře</p>
                  </li>
                  <li>
                    <p>Uhrazení pronájmu a energií za ordinaci</p>
                  </li>
                  <li>
                    <p>Materiální pomoc – výhledově výstavba zdravotního střediska.</p>
                  </li>
                  <li>
                    <p>Pomoc s bydlením</p>
                  </li>
                  <li>
                    <p>
                      <a href="https://www.dolnidobrouc.cz/aktuality/hledame-zajemce-o-lekarskou-praxi-v-dolni-dobrouci-prakticky-lekar-pro-dospele" className="link" target="_blank">
                        <span data-content="www.dolnidobrouc.cz/aktuality/hledame-zajemce-o-lekarskou-praxi-v-dolni-dobrouci-prakticky-lekar-pro-dospele">www.dolnidobrouc.cz/aktuality/hledame-zajemce-o-lekarskou-praxi-v-dolni-dobrouci-prakticky-lekar-pro-dospele</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://lichkov.cz/" target="_blank" className="card-title">
                  <h2>Lichkov</h2>
                  <img src="/img/lichkov_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>
                      Ve spolupráci s Městysem Mladkov{" "}
                      <a href="https://mladkov.cz/" className="link">
                        <span data-content="mladkov.cz/">mladkov.cz/</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>Pro pediatra a stomatologa vybavení ordinace.</p>
                  </li>
                  <li>
                    <p>Byt</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="okres" id="svitavy" data-aos="fade-up">
              <h1>
                <span>Okres</span> Svitavy
              </h1>
              <div className="card2">
                <a href="https://www.litomysl.cz" target="_blank" className="card-title">
                  <h2>Litomyšl</h2>
                  <img src="/img/litomysl_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Městské byty k pronájmu přednostně lékařům, jako služební byty.</p>
                  </li>
                  <li>
                    <p>Pozemky pro výstavbu v lokalitě Na Lánech.</p>
                  </li>
                  <li>
                    <p>Vstupy do městského bazénu, případně sportovní hala pro sportovní aktivity personálu nemocnice.</p>
                  </li>
                  <li>
                    <p>
                      Na webu města funguje podstránka o zdravotnictví:{" "}
                      <a className="link" href="https://www.litomysl.cz/zdravotnictvi" target="_blank">
                        <span data-content="www.litomysl.cz/zdravotnictvi">www.litomysl.cz/zdravotnictvi</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Město zřizuje Fond pro podporu zdravotnictví na Litomyšlsku a ten poskytuje různé dotace na zlepšení zdravotnictví ve městě a okolí - více zde:{" "}
                      <a className="link" href="https://nadace.litomysl.cz/" target="_blank">
                        <span data-content="nadace.litomysl.cz/">nadace.litomysl.cz/</span>
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="link" href="https://www.youtube.com/watch?v=ZtRZFreQxyU" target="_blank">
                        <span data-content="Do Litomyšlské nemocnice hledáme lékaře a sestry">Do Litomyšlské nemocnice hledáme lékaře a sestry</span>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://svitavy.cz/" target="_blank" className="card-title">
                  <h2>Svitavy</h2>
                  <img src="/img/svitavy_znak.jpeg" alt="" />
                </a>
                <ul>
                  <li>
                    <h5>Zařízení pro děti vyžadující okamžitou pomoc:</h5>
                    <ul>
                      <li>
                        <p>
                          <a href="https://www.dc-svitavy.cz/" className="link" target="_blank">
                            <span data-content="www.dc-svitavy.cz">www.dc-svitavy.cz</span>
                          </a>
                        </p>
                      </li>
                      <li>
                        <p>Stáže umožňujeme dle individuální domluvy, dle možností našeho provozu.</p>
                      </li>
                      <li>
                        <p>Dlouhodobě poskytujeme odbornou praxi pro střední Zdravotnickou školu Svitavy</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.policka.org/" target="_blank" className="card-title">
                  <h2>Polička</h2>
                  <img src="/img/policka_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Na zařízení stomatologické ordinace příspěvek ve výši 800 000 Kč (podmínka provoz ordinace po dobu 5 let)</p>
                  </li>
                  <li>
                    <p>Obecní byt</p>
                  </li>
                  <li>
                    <p>Volné prostory zubní ordinace u stávajících lékařů a další součinnost zubnímu lékaři za účelem zřízení a provozování zubní ordinace v Poličce</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="http://www.hradecnadsvitavou.cz " target="_blank" className="card-title">
                  <h2>Hradec nad Svitavou</h2>
                  <img src="/img/Hradecnadsvitavou_znak.png" alt="" />
                </a>
                <h5>Pro nově příchozí dětskou a zubní lékařku/lékaře/pediatra nabízíme:</h5>
                <ul>
                  <li>
                    <p>vybavenou ordinaci</p>
                  </li>
                  <li>
                    <p>stavební parcelu v blízkosti ordinace (cca 400 m), kompletně zasíťovanou</p>
                  </li>
                  <li>
                    <p>odpuštění nájmu na určitou dobu</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.obecopatov.cz/" target="_blank" className="card-title">
                  <h2>Opatov</h2>
                  <img src="/img/opatov_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Ordinace pro obvodního, zubního, dětského lékaře</p>
                  </li>
                  <li>
                    <p>Služební byt</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.jevicko.cz/" target="_blank" className="card-title">
                  <h2>Jevíčko</h2>
                  <img src="/img/jevicko_znak.png" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Finanční podpora novému lékaři na rozjezd a vybavení ordinace ve výši dle dohody</p>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <a href="https://www.cista.info/" target="_blank" className="card-title">
                  <h2>Čistá</h2>
                  <img src="/img/cista_znak.jpg" alt="" />
                </a>
                <ul>
                  <li>
                    <p>Prostory ordinace bezplatně. Všechny prostory ordinace i sesterny jsou po kompletní rekonstrukci, včetně výměny nábytku.</p>
                  </li>
                  <li>
                    <p>Energie (voda, elektřina, vytápění) hradí obec.</p>
                  </li>
                  <li>
                    <p>Spolufinancování konkrétního vybavení</p>
                  </li>
                  <li>
                    <p>Kompletní informační servis pro občany</p>
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
