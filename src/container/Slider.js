import Slider from "../components/Slider";
import { connect } from "react-redux";
import { getCarousel } from "../store/action";

const mapState = (state) => ({
  carousel: state.carousel,
});

const mapDispatch = (dispatch) => ({
  getCarousel: () => {
    dispatch(getCarousel());
  },
});

export default connect(mapState, mapDispatch)(Slider);
