import {
  TEXT_INPUT_CHANGE,
  MESSAGE_SEND,
  GET_ALL_DATA,
  GET_ALL_DATA_ERROR,
  GET_ALL_DATA_SUCCESS,
  // GET_CAROUSEL,
  // GET_CAROUSEL_ERROR,
  // GET_CAROUSEL_SUCCESS,
  // GET_PROJECT,
  // GET_PROJECT_ERROR,
  // GET_PROJECT_SUCCESS,
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
    // case GET_CAROUSEL:
    //   return {
    //     ...state,
    //   };
    // case GET_CAROUSEL_ERROR:
    //   return {
    //     ...state,
    //     carousel: [],
    //     carouselError: action.payload,
    //   };
    // case GET_CAROUSEL_SUCCESS:
    //   return {
    //     ...state,
    //     carousel: [...action.payload],
    //     carouselError: "",
    //   };
    // case GET_PROJECT:
    //   return {
    //     ...state,
    //   };
    // case GET_PROJECT_ERROR:
    //   return {
    //     ...state,
    //     project: [],
    //     projectError: action.payload,
    //   };
    // case GET_PROJECT_SUCCESS:
    //   return {
    //     ...state,
    //     project: [...action.payload],
    //     projectError: "",
    //   };
    default:
      return state;
  }
};
