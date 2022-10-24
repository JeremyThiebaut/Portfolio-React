import { TEXT_INPUT_CHANGE, MESSAGE_SEND } from "../action";

const initialState = {
  messageInput: {
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    message: "",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TEXT_INPUT_CHANGE:
      return {
        ...state,
        messageInput: {
          ...state.messageInput,
          ...action.payload,
        },
      };
    case MESSAGE_SEND:
      return {
        ...state,
        messageInput: {
          firstName: "",
          lastName: "",
          mail: "",
          phone: "",
          message: "",
        },
      };
    default:
      return state;
  }
};
