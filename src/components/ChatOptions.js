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
      <ChatOptionButton
       option= "I want to shop in bulk"
       id= "BULK_SHOP"
      />
    </div>
  );
}

export default ChatOptions;
