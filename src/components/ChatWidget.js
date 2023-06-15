import React, { useState, useEffect, useRef } from "react";
import {
  Widget,
  addResponseMessage,
  addUserMessage,
  renderCustomComponent,
  dropMessages,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import ChatOptionButton from "./ChatOptionButton";
import { useStateValue } from "../service/StateProvider";
import "./ChatWidget.css"; 
import ChatOptions from "./ChatOptions";

const ChatWidget = () => {
  const [isWidgetOpen, setWidgetOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const widgetRef = useRef(null);
  const [{ chatAction, chatUserInputs }, dispach] = useStateValue();

  const clearChatContext = () => {
    dispach({
      type: "CLEAR_CHAT_DATA"
    });
  };

  useEffect(() => {
    dropMessages();
    sendInitialMessage();
  }, []);

  const sendInitialMessage = () => {
    // Send initial message with options as user messages
    addResponseMessage("Please select an option:");
    renderCustomComponent(ChatOptions, {});
    // renderCustomComponent(ChatOptionButton, {
    //   option: "What can i make from my orders ?",
    //   id: "MAKE_DISH_FROM_ORDER",
    // });
    // renderCustomComponent(ChatOptionButton, {
    //   option: "what can i make from ?",
    //   id: "MAKE_DISH_FROM_ITEMS",
    // });
  };

  const handleWidgetClick = () => {
    setWidgetOpen(!isWidgetOpen);
  };

  const handleClearChat = () => {
    dropMessages();
    clearChatContext();
    widgetRef.current?.handleNewUserMessage("");
    widgetRef.current?.scrollToBottom();
    sendInitialMessage();
  };

  const handleMessageReceived = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div onClick={handleWidgetClick}  >
      <Widget
        ref={widgetRef}
        handleNewUserMessage={handleMessageReceived}
        title="Grocery Assistant"
        subtitle={
          <div>
            Ask me anything    {<button className='chat_product__price' onClick={handleClearChat}>Clear Chat</button>}
          </div>
        }
        showCloseButton={true}
        handleVisibilityChange={setWidgetOpen}
        autofocus={true}
        isOpen={isWidgetOpen}
        senderPlaceHolder="Type a message..."
        badge={1}
        showTimeStamp={true}
        fullScreenMode={false}
      />
    </div>
  );
};

export default ChatWidget;
