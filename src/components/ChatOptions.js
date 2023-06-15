import React from "react";
import "./ChatOptions.css";
import ChatOptionButton from "./ChatOptionButton";

function ChatOptions() {
  return (
    <div className="chat_options">
      <ChatOptionButton
       option= "I want to make a Dish"
       id= "MAKE_DISH"
      />
    </div>
  );
}

export default ChatOptions;
