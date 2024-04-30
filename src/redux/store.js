import { configureStore } from "@reduxjs/toolkit";
// import services
import { api } from "./services/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  devTools: import.meta.env.VITE_APP_NODE_ENV == "development" ? true : false,
  middleware: (gDM) => gDM().concat(api.middleware),
});

export default store;
