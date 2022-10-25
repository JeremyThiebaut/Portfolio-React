import { GET_CAROUSEL, getCarouselError, getCarouselSuccess } from "../action";
import axios from "axios";

const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_CAROUSEL:
      axios({
        method: "get",
        url: "http://localhost:3000/carousel",
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getCarouselSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(getCarouselError(err));
        });

      break;
    default:
      return;
  }
};

export default ajaxMiddleware;
