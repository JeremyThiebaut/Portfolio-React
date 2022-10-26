import {
  // GET_PROJECT,
  // getProjectError,
  // getProjectSuccess,
  GET_ALL_DATA,
  getAllDataError,
  getAllDataSuccess,
} from "../action";
import axios from "axios";

const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_ALL_DATA:
      axios({
        method: "get",
        url: "http://localhost:3001/allData",
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(getAllDataSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(getAllDataError(error));
        });

      break;
    default:
      return;
  }
};

export default ajaxMiddleware;
