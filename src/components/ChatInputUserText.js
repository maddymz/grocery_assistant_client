import React, { useState } from "react";
import { useStateValue } from "../service/StateProvider";
import "./ChatInputUserText.css";

function ChatInputUserText({ option, id }) {
  const [{ chatAction, chatUserInputs, triggerGPT, triggerBulkShop }, dispach] = useStateValue(); //dispach can be anything like setState
  const [userText, setUserText] = useState(" ");
  const [userPref, setUserPref] = useState(" ");

  const onOptionChange = (e) => {
    setUserPref(e.target.value);
  };

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

  const setTriggerBulkShop = (inp) => {
    dispach({
      type: "TRIGGER_BULK_SHOP",
      triggerValue: inp,
    });
  };

  const handleConfirmClick = (option) => {
    saveChatUserInputs(userText.split(",").map((item) => item.trim()));
    if (option.currentTarget.id === "BULK_SHOP") {
      setTriggerBulkShop(true);
    }else {
      setTriggerGPT(true);
    }
    console.log( "Now we will call chatGPT Depending on what ever the current action and userInputs are");
    console.log("chatAction", chatAction);
    console.log("chatUserInputs", chatUserInputs);
    console.log("triggerGPT", triggerGPT);
    console.log("triggerBulkShop", triggerBulkShop);
  };

  return (
    <>
      <div className="chat_input_container">
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
            onClick={(option) => handleConfirmClick(option)}
          >
            Confirm
          </button>
        </div>
        <div className="chat_input_pref_container">
          <div>Preferences</div>
          <div className="chat_input_preferences">
            <input
              className="chat_radio_input"
              type="radio"
              name="pref"
              value=" "
              id="none"
              checked={userPref === " "}
              onChange={onOptionChange}
            />
            <label className="chat_radio_label" htmlFor="none">
              None
            </label>
            <input
              className="chat_radio_input"
              type="radio"
              name="pref"
              value="Vegetarian"
              id="vegetarian"
              checked={userPref === "Vegetarian"}
              onChange={onOptionChange}
            />
            <label className="chat_radio_label" htmlFor="vegetarian">
              Vegetarian
            </label>

            <input
              className="chat_radio_input"
              type="radio"
              name="pref"
              value="Chicken"
              id="chicken"
              checked={userPref === "Chicken"}
              onChange={onOptionChange}
            />
            <label className="chat_radio_label" htmlFor="chicken">
              Non-Vegetarian
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatInputUserText;
