import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    // results:resultSlice
  },
});

export default store;
