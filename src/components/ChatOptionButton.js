import React from "react";
import { useStateValue } from "../service/StateProvider";
import { addResponseMessage, renderCustomComponent } from "react-chat-widget";
import "./ChatOptionButton.css";
import ChatInputUserText from "./ChatInputUserText";

function ChatOptionButton({ option, id }) {
  const [{ chatAction }, dispach] = useStateValue(); //dispach can be anything like setState

  const saveChatAction = (inp) => {
    dispach({
      type: "SAVE_CHAT_ACTION",
      chatAction: inp,
    });
  };

  const handleOptionClick = (id) => {
    
    if (id === "MAKE_DISH") {
      addResponseMessage(`Ok what dish are you planning to make today ??`);
      saveChatAction(id);
      renderCustomComponent(ChatInputUserText, {
        option: "Any Dish in mind ?",
        id: "MAKE_DISH",
      });
    }
    if (id === "BULK_SHOP") {
      addResponseMessage(`Please enter the dish name and number of days/weeks or people`);
      saveChatAction(id);
      renderCustomComponent(ChatInputUserText, {
        option: "Number of days supply",
        id: "BULK_SHOP",
      });
    }
  };

  return (
    <button
      className="chat_option_button"
      id={id}
      onClick={() => handleOptionClick(id)}
    >
      {option}
    </button>
  );
}

export default ChatOptionButton;
