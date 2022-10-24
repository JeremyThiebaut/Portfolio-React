export const TEXT_INPUT_CHANGE = "TEXT_INPUT_CHANGE";
export const MESSAGE_SEND = "MESSAGE_SEND";

export const textInputChange = (payload) => ({
  type: TEXT_INPUT_CHANGE,
  payload,
});

export const messageSend = () => ({
  type: MESSAGE_SEND,
});
