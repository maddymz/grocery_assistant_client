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
    if (id === "MAKE_DISH_FROM_ORDER") {
      addResponseMessage(`Ok can you give me your orderID with which you want to make a dish ??`);
      saveChatAction(id);
      renderCustomComponent(ChatInputUserText, {
        option: "Which Order ID ?",
        id: "MAKE_DISH_FROM_ORDER",
      });
    }
    if (id === "MAKE_DISH_FROM_ITEMS") {
      addResponseMessage(`Ok Just specify ingredients seperated by a comma and i'll try to suggest a dish ?? (keepn in mind I migt add some extra basic ingredients like salt)`);
      saveChatAction(id);
      renderCustomComponent(ChatInputUserText, {
        option: "What all ingredients ?",
        id: "MAKE_DISH_FROM_ITEMS",
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
