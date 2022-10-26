import { connect } from "react-redux";
import Project from "../components/Project";

const mapState = (state) => ({
  project: state.project,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Project);
