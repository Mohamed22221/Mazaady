import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import { reducer } from "../Reducer";
import { wrapperAPI } from "../helper/wrapperApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    wrapperAPI.middleware,
  ],
  // middleware: new MiddlewareArray().concat(wrapperAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
