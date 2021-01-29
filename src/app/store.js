import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import questionReducer from "../features/questionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});
