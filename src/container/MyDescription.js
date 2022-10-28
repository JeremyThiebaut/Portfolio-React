import { connect } from "react-redux";
import MyDescription from "../components/MyDescription";

const mapState = (state) => ({
  myDescription: state.myDescription,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(MyDescription);
