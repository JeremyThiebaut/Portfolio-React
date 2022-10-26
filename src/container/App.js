import App from "../components/App";
import { connect } from "react-redux";
import { getAllData } from "../store/action";

const mapState = null;

const mapDispatch = (dispatch) => ({
  getAllData: () => {
    dispatch(getAllData());
  },
});

export default connect(mapState, mapDispatch)(App);
