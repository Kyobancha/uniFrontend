import { configureStore } from '@reduxjs/toolkit';
import userSlice from './react/components/LoginModal/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
