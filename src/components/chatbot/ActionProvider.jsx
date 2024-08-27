// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleLekari = () => {
    const botMessage = createChatBotMessage("Zde jsou informace o praktických lékařích", {
      widget: "ObcanBtn",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNabor = () => {
    const botMessage = createChatBotMessage("Zde jsou náborové příspěvky", {
      widget: "LekariBtn",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleLekari,
            handleNabor,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
