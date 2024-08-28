import React from "react";
import "./obcan-style.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Chatbot from "../../components/chatbot/chatbot";
import RozcestnikObcan from "../../components/rozcestnik/rozcestnik-obcan";
import Btnup from "../../components/btnup/btnup";
import { Helmet } from "react-helmet";

export default function Ustavy() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rehabilitační ústavy | Zdraví Pardubického kraje</title>
      </Helmet>
      <Navbar />
      <Chatbot />
      <Btnup />
      <div className="main-sec" id="prakticti-lekari">
        <RozcestnikObcan />
        <div className="semi-title" id="semi">
          <div className="container">
            <h2>Rehabilitační ústavy</h2>
          </div>
        </div>
        <div className="container">
          <div className="semi-content">
            <div className="card2">
              <div className="card-title">
                <h2>Hamzova léčebna Luže - Košumberk</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
