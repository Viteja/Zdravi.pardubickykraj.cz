import Chatbot from "react-chatbot-kit";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import "./chatbot.css";
import { useState } from "react";

export default function chatbot() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className={isOpen ? "show-bot" : "hide-bot"}>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} headerText="Primář Sova" placeholderText="Váš dotaz:" />
      </div>
      <div className="chatbot" title="Chatbot">
        {!isOpen ? <i className="fa-solid fa-robot" onClick={() => setisOpen(true)}></i> : <i className="fa-solid fa-xmark nav-changer" onClick={() => setisOpen(false)}></i>}
      </div>
    </>
  );
}
