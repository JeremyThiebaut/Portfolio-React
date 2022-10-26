export const TEXT_INPUT_CHANGE = "TEXT_INPUT_CHANGE";
export const MESSAGE_SEND = "MESSAGE_SEND";
export const GET_ALL_DATA = "GET_ALL_DATA";
export const GET_ALL_DATA_ERROR = "GET_ALL_DATA_ERROR";
export const GET_ALL_DATA_SUCCESS = "GET_ALL_DATA_SUCCESS";
// export const GET_CAROUSEL = "GET_CAROUSEL";
// export const GET_CAROUSEL_ERROR = "GET_CAROUSEL_ERROR";
// export const GET_CAROUSEL_SUCCESS = "GET_CAROUSEL_SUCCESS";
// export const GET_PROJECT = "GET_PROJECT";
// export const GET_PROJECT_ERROR = "GET_PROJECT_ERROR";
// export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";

export const textInputChange = (payload) => ({
  type: TEXT_INPUT_CHANGE,
  payload,
});

export const messageSend = () => ({
  type: MESSAGE_SEND,
});

export const getAllData = () => ({
  type: GET_ALL_DATA,
});

export const getAllDataError = (payload) => ({
  type: GET_ALL_DATA_ERROR,
  payload,
});

export const getAllDataSuccess = (payload) => ({
  type: GET_ALL_DATA_SUCCESS,
  payload,
});

// export const getCarousel = () => ({
//   type: GET_CAROUSEL,
// });

// export const getCarouselError = (payload) => ({
//   type: GET_CAROUSEL_ERROR,
//   payload,
// });

// export const getCarouselSuccess = (payload) => ({
//   type: GET_CAROUSEL_SUCCESS,
//   payload,
// });

// export const getProject = () => ({
//   type: GET_PROJECT,
// });

// export const getProjectError = (payload) => ({
//   type: GET_PROJECT_ERROR,
//   payload,
// });

// export const getProjectSuccess = (payload) => ({
//   type: GET_PROJECT_SUCCESS,
//   payload,
// });
