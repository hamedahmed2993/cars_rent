import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/couter/counterSlice";
import filtersReducer from "./features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filtersReducer,
  },
});
