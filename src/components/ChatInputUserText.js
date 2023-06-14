import React, { useState } from "react";
import { useStateValue } from "../service/StateProvider";
import "./ChatInputUserText.css"

function ChatInputUserText({ option, id }) {
  const [{ chatAction, chatUserInputs,triggerGPT }, dispach] = useStateValue(); //dispach can be anything like setState
  const [userText, setUserText] = useState("");

  const saveChatUserInputs = (inp) => {
    dispach({
      type: "SAVE_CHAT_USER_INPUTS",
      userInputs: inp,
    });
  };

  const setTriggerGPT = (inp) => {
    dispach({
      type: "TRIGGER_CHAT_API",
      triggerValue: inp,
    });
  };

  const handleConfirmClick = () => {
    saveChatUserInputs(userText.split(",").map((item) => item.trim()));
    setTriggerGPT(true);
    console.log( "Now we will call chatGPT Depending on what ever the current action and userInputs are");
    console.log(chatAction);
    console.log(chatUserInputs);
    console.log(triggerGPT);
  };

  return (
    <>
    <div className="chat_input">
      <input
        type="text"
        className="chat_input_box"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <button
        className="chat_input_confirm_button"
        id={id}
        placeholder={option}
        onClick={() => handleConfirmClick()}
      >
        Confirm
      </button>
      </div>
    </>
  );
}

export default ChatInputUserText;
