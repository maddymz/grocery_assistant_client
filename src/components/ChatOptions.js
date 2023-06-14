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
       option= "What can i make from my orders ?"
       id= "MAKE_DISH_FROM_ORDER"
      />
      <ChatOptionButton
       option= "what can i make from a list of ingredients?"
       id= "MAKE_DISH_FROM_ITEMS"
      />
    </div>
  );
}

export default ChatOptions;
