import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { AiOutlineComment, AiOutlineClose } from "react-icons/ai";
import config from "../utils/config";
import MessageParser from "../utils/messageParser";
import ActionProvider from "../utils/actionProvider";
import "./chatbot.css";

const ChatbotComponent = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        {showChatbot ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineComment size={24} />
        )}
      </button>
      {showChatbot && (
        <div className="chatbot">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
