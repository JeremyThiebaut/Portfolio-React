import {
  TEXT_INPUT_CHANGE,
  MESSAGE_SEND,
  GET_CAROUSEL,
  GET_CAROUSEL_ERROR,
  GET_CAROUSEL_SUCCESS,
} from "../action";

const initialState = {
  messageInput: {
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    message: "",
  },

  carousel: [],
  error: "",
  loading: false,
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
    case GET_CAROUSEL:
      return {
        ...state,
        loading: true,
      };
    case GET_CAROUSEL_ERROR:
      return {
        ...state,
        loading: false,
        carousel: [],
        error: action.payload,
      };
    case GET_CAROUSEL_SUCCESS:
      return {
        ...state,
        loading: false,
        carousel: [...action.payload],
        error: "",
      };
    default:
      return state;
  }
};
