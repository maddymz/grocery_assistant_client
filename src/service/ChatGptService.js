import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { addResponseMessage, renderCustomComponent } from "react-chat-widget";
import {
  GET_PATH,
  GPT_JAM_BACKEND_URL,
  GPT_PATH,
  ITEMS_PATH,
  MAKE_DISH_PATH,
} from "../constants/UrlValues";

import ChatProductResponse from "../components/ChatProductResponse";
import ChatHowToResponse from "../components/ChatHowToResponse";
import ChatIngredientsResponse from "../components/ChatIngredientsResponse";

const GPTService = () => {
  const [{ chatAction, chatUserInputs, triggerGPT }, dispach] = useStateValue();

  const setTriggerGPT = (inp) => {
    dispach({
      type: "TRIGGER_CHAT_API",
      triggerValue: inp,
    });
  };

  const fetchData = async (action, inputs) => {
    try {
      let url = GPT_JAM_BACKEND_URL + GPT_PATH;
      if (action === "MAKE_DISH") {
        url = url + MAKE_DISH_PATH;
      }
      //TODO: add other cases for GPT endpoints in backend

      const response = await fetch(url, {
        method: "POST",
        body:  JSON.stringify({
          "inputs": inputs
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      // Process the API response and return the relevant data
      return data;
    } catch (error) {
      // Handle API call error
      console.error("API call error:", error);
      throw error;
    }
  };

  const fetchItems = async (itemIdList) => {
    try {
      let url = GPT_JAM_BACKEND_URL + ITEMS_PATH + GET_PATH;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ itemIds: itemIdList }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      // Process the API response and return the relevant data
      return data;
    } catch (error) {
      // Handle API call error
      console.error("API call error:", error);
      throw error;
    }
  };

  useEffect(() => {
    console.log("inside use effect");
    if (triggerGPT) {
      // Perform API call
      addResponseMessage(`OK Give me a minute let me think ....`);
      fetchData(chatAction, chatUserInputs)
        .then((response) => {
          // Handle API response
          // Dispatch actions to update Redux state
          const howTo = response.howTo;
          const requiredQuantity = response.requiredQuantity;

          renderCustomComponent(ChatHowToResponse, { howTo });
          renderCustomComponent(ChatIngredientsResponse, { requiredQuantity });

          const itemIds = Object.entries(response.ingredientsMapping).map(([key, value]) => {
            if (value === "NA") {
              return `NA-${key}`;
            } else {
              return value;
            }
          });

          fetchItems(itemIds).then((itemResult) => {
            console.log("HERERE");
            console.log(itemResult);
            renderCustomComponent(ChatProductResponse, { itemResult });

          });
          setTriggerGPT(false);
        })
        .catch((error) => {
          // Handle API call error
          console.error("API call error:", error);
          setTriggerGPT(false);
        });
    }
  }, [triggerGPT]);

  return null; // Since this is a service, no component is rendered
};

export default GPTService;