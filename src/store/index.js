import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import mailMiddleware from "./middlewares/mailMiddleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mailMiddleware),
});

export default store;
