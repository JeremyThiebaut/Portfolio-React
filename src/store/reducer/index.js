import {
  TEXT_INPUT_CHANGE,
  MESSAGE_SEND,
  GET_ALL_DATA,
  GET_ALL_DATA_ERROR,
  GET_ALL_DATA_SUCCESS,
} from "../action";

const initialState = {
  messageInput: {
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    message: "",
  },

  loading: false,

  carousel: [],
  project: [],
  myDescription: [],
  dataError: "",
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
    case GET_ALL_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_DATA_ERROR:
      return {
        ...state,
        carousel: [],
        project: [],
        myDescription: [],
        dataError: action.payload,
        loading: false,
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        dataError: "",
        loading: false,
      };
    default:
      return state;
  }
};
