import { MESSAGE_INPUT_CHANGE, MESSAGE_SEND } from "../action";

const initialState = {
  messages: [],
  messageInput: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_INPUT_CHANGE:
      return {
        ...state,
        messageInput: action.payload,
      };
    case MESSAGE_SEND:
      return {
        ...state,
        messageInput: "",
      };
    default:
      return state;
  }
};
