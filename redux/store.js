import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/sliceAuth';
import { postsReducer } from './posts/slicePosts';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
