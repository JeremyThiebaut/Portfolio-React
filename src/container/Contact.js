import { connect } from "react-redux";
import Contact from "../components/Contact";
import { textInputChange, messageSend } from "../store/action";

const mapState = (state) => ({
  messageInput: state.messageInput,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changeData) => {
    dispatch(textInputChange(changeData));
  },
  onFormSubmit: () => {
    dispatch(messageSend());
  },
});

export default connect(mapState, mapDispatch)(Contact);
