export const MESSAGE_INPUT_CHANGE = "MESSAGE_INPUT_CHANGE";
export const MESSAGE_SEND = "MESSAGE_SEND";

export const messageInputChange = (payload) => ({
  type: MESSAGE_INPUT_CHANGE,
  payload,
});

export const messageSend = () => ({
  type: MESSAGE_SEND,
});
