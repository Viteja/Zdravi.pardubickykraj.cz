import { createChatBotMessage } from "react-chatbot-kit";
import Obcan_btn from "./widgets/main-btn";
const botName = "Primář Sova";

const config = {
  initialMessages: [createChatBotMessage(`Dobrý den! Já jsem ${botName}, Váš virtuální asistent. Co hledáte?`, { widget: "MainBtn" })],
  botName: botName,
  widgets: [
    {
      widgetName: "MainBtn",
      widgetFunc: (props) => <Obcan_btn {...props} src={"/obcan/prakticti-lekari"} />,
    },
  ],
  lang: "cs",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1877F2",
    },
    chatButton: {
      backgroundColor: "var(--blue)",
    },
  },
};

export default config;
