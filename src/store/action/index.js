export const TEXT_INPUT_CHANGE = "TEXT_INPUT_CHANGE";
export const MESSAGE_SEND = "MESSAGE_SEND";
export const GET_CAROUSEL = "GET_CAROUSEL";
export const GET_CAROUSEL_ERROR = "GET_CAROUSEL_ERROR";
export const GET_CAROUSEL_SUCCESS = "GET_CAROUSEL_SUCCESS";

export const textInputChange = (payload) => ({
  type: TEXT_INPUT_CHANGE,
  payload,
});

export const messageSend = () => ({
  type: MESSAGE_SEND,
});

export const getCarousel = () => ({
  type: GET_CAROUSEL,
});

export const getCarouselError = (payload) => ({
  type: GET_CAROUSEL_ERROR,
  payload,
});

export const getCarouselSuccess = () => ({
  type: GET_CAROUSEL_SUCCESS,
});
