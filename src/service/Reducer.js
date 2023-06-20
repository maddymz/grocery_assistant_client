export const initialState = {
  basket: [],
  user: null,
  chatAction: "",
  chatUserInputs: [],
  triggerGPT: false,
  triggerBulkShop: false
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((itm) => itm.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cannot remove product id ${action.id} not in basket`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SAVE_CHAT_ACTION":
      return {
        ...state,
        chatAction: action.chatAction,
      };
    case "SAVE_CHAT_USER_INPUTS":
      return {
        ...state,
        chatUserInputs: action.userInputs,
      };
    case "CLEAR_CHAT_DATA":
      return {
        ...state,
        chatUserInputs: [],
        chatAction:''
      };
    case "TRIGGER_CHAT_API":
      return {
        ...state,
        triggerGPT: action.triggerValue
      };
    case "TRIGGER_BULK_SHOP":
      return {
        ...state,
        triggerBulkShop: action.triggerValue
      };
    default:
      return state;
  }
};
