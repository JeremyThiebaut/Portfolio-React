import { connect } from "react-redux";
import Contact from "../components/Contact";
import { messageInputChange, messageSend } from "../store/action";

const mapState = (state) => ({
  message: state.messageInput,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (newMessage) => {
    dispatch(messageInputChange(newMessage));
  },
  onMessageSend: () => {
    dispatch(messageSend());
  },
});

export default connect(mapState, mapDispatch)(Contact);
