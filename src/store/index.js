import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import ajaxMiddleware from "./middlewares/ajaxMiddleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ajaxMiddleware),
});

export default store;
