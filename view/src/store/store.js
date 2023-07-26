import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
const reducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer,
});
