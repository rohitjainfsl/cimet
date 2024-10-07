import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/slice.js";
import TodoReducer from "./slices/todoSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: TodoReducer,
  },
});
export default store;
