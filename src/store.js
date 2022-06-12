import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './react/components/LoginModal/loginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
