import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import questionReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});
