import { configureStore } from '@reduxjs/toolkit';
import userSlice from './react/pages/Users/userSlice';
import messageSlice from './react/pages/Messages/messageSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
  },
});
