import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/home/home";
import Obcan from "./pages/obcan/obcan";
import Lekar from "./pages/lekar/lekar";
import Lekari from "./pages/obcan-content/lekari";
import Zubar from "./pages/obcan-content/zubar";
import Pece from "./pages/obcan-content/ldn";
import Nemocnice from "./pages/obcan-content/nemocnice";
import Pohotovosti from "./pages/obcan-content/pohotovost";
import Duchod from "./pages/obcan-content/duchod";
import Prispevky from "./pages/lekar-content/prispevky";
import Dotace2 from "./pages/lekar-content/dotace-lekar";
import Benefity from "./pages/lekar-content/benefity";
import Staze from "./pages/lekar-content/staze";
import Skoleni from "./pages/lekar-content/skoleni";
import Nemocnice2 from "./pages/lekar-content/nemocnice-lekar";
import Kariera from "./pages/lekar-content/kariera";
import Pojistovna from "./pages/obcan-content/pojistovna";
import Kraj from "./pages/obcan-content/kraj";
import Skolstvi from "./pages/obcan-content/skolstvi";
import Deti from "./pages/obcan-content/deti";
import AOS from "aos";
import "aos/dist/aos.css";

import "react-chatbot-kit/build/main.css";

import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/sea-green";

import "@splidejs/react-splide/css/core";
import Chatbot from "react-chatbot-kit";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/obcan" element={<Obcan />} />
          <Route exact path="/zdravotnik" element={<Lekar />} />
          <Route exact path="/obcan/prakticti-lekari" element={<Lekari />} />
          <Route exact path="/obcan/stomatologie-a-ortodoncie" element={<Zubar />} />
          <Route exact path="/obcan/lecebny-dlouhodobe-nemocnych" element={<Pece />} />
          <Route exact path="/obcan/pratelska-nemocnice" element={<Nemocnice />} />
          <Route exact path="/obcan/pohotovosti" element={<Pohotovosti />} />
          <Route exact path="/obcan/duchod" element={<Duchod />} />
          <Route exact path="/zdravotnik/naborove-prispevky" element={<Prispevky />} />
          <Route exact path="/zdravotnik/dotace-zdravotnik" element={<Dotace2 />} />
          <Route exact path="/zdravotnik/benefity-mest-a-obci" element={<Benefity />} />
          <Route exact path="/zdravotnik/staze" element={<Staze />} />
          <Route exact path="/zdravotnik/skoleni" element={<Skoleni />} />
          <Route exact path="/zdravotnik/pratelska-nemocnice-zdravotnik" element={<Nemocnice2 />} />
          <Route exact path="/zdravotnik/kariera" element={<Kariera />} />
          <Route exact path="/obcan/zdravotni-pojistovny" element={<Pojistovna />} />
          <Route exact path="/obcan/co-delame-pro-zlepseni-krajskeho-zdravotnictvi" element={<Kraj />} />
          <Route exact path="/obcan/zdravotnicke-skoly" element={<Skolstvi />} />
          <Route exact path="/obcan/detska-centra-zdravotni-pece-o-nejmensi" element={<Deti />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
