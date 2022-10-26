import Slider from "../components/Slider";
import { connect } from "react-redux";

const mapState = (state) => ({
  carousel: state.carousel,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Slider);
