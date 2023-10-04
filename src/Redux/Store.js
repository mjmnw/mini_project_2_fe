import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/Auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});