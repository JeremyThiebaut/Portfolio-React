// import axios from "axios";

const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
};

export default ajaxMiddleware;
