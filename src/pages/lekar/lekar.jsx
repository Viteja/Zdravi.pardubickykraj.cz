import React from "react";
import "./lekar.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Aktuality from "../../components/aktuality/aktuality";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikLekar from "../../components/rozcestnik/rozcestnik-lekar";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Lekar() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zdravotník | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Btnup />
      <div id="lekar">
        <div className="lekar-main">
          {/*  <div className="containerr">
          <Splide
            options={{
              rewind: true,
              autoplay: true,
              loop: true,
            }}
          >
            <Slider src={"./img/benefity2.png"} title={"Benefity měst a obcí"} href={"/lekar/benefity-mest-a-obci"} section={"semi"} text={"Vedením obcí a měst schválené investice do nových, nebo modernějších prostor pro naše lékaře. Podpora výjimečné zdravotní péče v konkrétním regionu a zlepšení životních podmínek pro všechny místní občany."} />
            <Slider src={"./img/kariera2.png"} title={"Kariéra - PŘIDEJTE SE K NÁM"} href={"/lekar/kariera"} section={"semi"} />
            <Slider src={"./img/modrasestra.png"} title={"Sestra Roku"} />
            <Slider src={"./img/lekar.webp"} title={"Jsem zdravotník a chci pracovat v Pardubickém kraji"} href={"/lekar/benefity-mest-a-obci"} section={"semi"} />
          </Splide>
        </div>*/}
          <div className="bg-lekar">
            <RozcestnikLekar />
          </div>
          {/* <!--    <div className="aktuality">
        <div className="container">
          <div className="obcan-title">
            <h5>Občan</h5>
            <h2>Aktuality</h2>
          </div>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              loop: true,
              perPage: 3,
              gap: "2rem",
              pagination: true,
              perMove: 1,
              breakpoints: {
                740: {
                  perPage: 1,
                  gap: "1rem",
                },
                768: {
                  perPage: 2,
                  gap: "1rem",
                },
                1024: {
                  perPage: 2,
                  gap: "1rem",
                },
              },
            }}
          >
            <Aktuality src={"./img/duchod.jpg"} title={"Žádost o důchod online"} href={"https://www.cssz.cz/zadost-o-duchod-online"} text={"Žádost o důchod online je služba ePortálu ČSSZ spuštěna v prosinci 2023. Služba klientům poskytuje možnost podat žádost o starobní, invalidní i pozůstalostní (vdovský, vdovecký i sirotčí) online, a to s využitím své elektronické identifikace. "} />
            <Aktuality src={"./img/ukrajina.webp"} title={"Pomoc občanům Ukrajiny / Допомога громадянам України"} href={"https://www.mpsv.cz/pomoc-ukrajine"} text={"Od 1. července 2023 došlo k některým úpravám v poskytování humanitární dávky. Změnila se výše humanitární dávky. Nově rozlišujeme zranitelné a nezranitelné osoby."} />
            <Aktuality src={"./img/znamenka.png"} title={"O dny melanomu byl rekordní zájem. Znaménka si v Pardubicích a Litomyšli nechalo zkontrolovat téměř 1100 lidí"} text={"Zájem o bezplatnou kontrolu pigmentových znamének je rok od roku větší. Do osvětové akce se v letošním roce zapojila obě kožní oddělení Nemocnice Pardubického kraje..."} />
            <Aktuality src={"./img/sestraroku.png"} title={"Nominujte sestru roku pardubického kraje"} text={"Nominace na první ročník je možné podávat od 25. dubna 2024 do 30. června 2024"} />
          </Splide>
        </div>
      </div> -->*/}

          <div className="container">
            <div className="info">
              <div
                className="sestraroku"
                data-aos="fade-up"
                data-aos-duration="800">
                <div className="sestra-show">
                  <h1>Sestřička Roku</h1>
                  <h3>Hlasujte do 31. 8. 2024</h3>
                  <a
                    className="primary-btn"
                    href="https://sestra.pardubickykraj.cz/"
                    target="_blank">
                    Zjistit více
                  </a>
                </div>
              </div>
              <div
                className="frend"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100">
                <div className="frend-content">
                  <h1>Kariéra</h1>
                  <h3>Nemocnice Padubického kraje</h3>
                  <a
                    className="primary-btn"
                    href="https://kariera.nempk.cz/"
                    target="_blank">
                    Více informací
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="zachranka">
            <div className="container">
              <div className="zachranka-main">
                <div className="zachranka-content">
                  <div className="zachranka-title">
                    <img
                      src="/img/zachranka-logo.png"
                      alt="Záchranka logo"
                      draggable="false"
                    />
                    <div className="title-text">
                      <h2>Záchranka</h2>
                      <h5>Mobilní aplikace pro tísňové volání</h5>
                    </div>
                  </div>
                  <p>
                    Ať už se nacházíte kdekoliv, nikdy nevíte, co se může stát.
                    Záchranka je ve Vašem mobilním telefonu vždy připravena pro
                    rychlé kontaktování zdravotnické záchranné služby nebo
                    horské služby stiskem jediného tlačítka. Navíc má řadu
                    dalších chytrých funkcí a propojení, která Vám v nouzi
                    pomohou.
                  </p>
                  <a href="https://www.zachrankaapp.cz/" target="_blank">
                    <span data-content="www.zachrankaapp.cz">
                      www.zachrankaapp.cz
                    </span>
                  </a>
                  <div className="download">
                    <a
                      href="https://apps.apple.com/cz/app/z%C3%A1chranka/id1071831457/"
                      target="_blank">
                      <img
                        src="/img/appstore.png"
                        alt="Appstore"
                        draggable="false"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.medicalit.zachranka&hl=cs"
                      target="_blank">
                      <img
                        src="/img/googleplay.png"
                        alt="GooglePlay"
                        draggable="false"
                      />
                    </a>
                  </div>
                </div>
                <img
                  src="/img/zachranka-phone.png"
                  alt=""
                  draggable="false"
                  className="phone"
                  data-aos="fade-up"
                  data-aos-duration="800"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="alert">
          <div className="container">
            <div className="alert-content">
              <i className="fa-solid fa-circle-exclamation"></i>
              <h2>Pozor! Tento Rozcestník neslouží k lékařským konzultacím!</h2>
              <p>
                Tento web je určen pouze k poskytování obecných informací z
                oblasti zdravotnictví. Vždy se o svém zdravotním stavu poraďte s
                lékařem nebo jiným kvalifikovaným zdravotnickým odborníkem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
