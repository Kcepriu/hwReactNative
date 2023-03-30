import { createSlice } from '@reduxjs/toolkit';
import {
  addPost,
  getPosts,
  increaseLikesToPost,
  getComments,
  addComments,
} from './operation';
import { statusOperation } from './statusOperation';

const handlePending = state => {
  state.performedOperation = '';
  state.isRefresing = true;
  state.textError = null;
};

const handleRejected = (state, action) => {
  state.isRefresing = false;
  state.textError = action.payload;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    userPosts: [],
    comments: [],
    curentPost: null,
    isRefresing: false,
    textError: null,
    performedOperation: '',
  },
  extraReducers: {
    // * 1 addPost
    [addPost.pending]: handlePending,
    [addPost.rejected]: handleRejected,
    [addPost.fulfilled](state, action) {
      //Зареєструвалися
      state.isRefresing = false;
      state.userPosts.unshift(action.payload);
      state.performedOperation = statusOperation.addPostOK;
      state.comments = [];
    },

    // * 2 getPosts(userId)
    [getPosts.pending]: handlePending,
    [getPosts.rejected]: handleRejected,
    [getPosts.fulfilled](state, action) {
      state.userPosts = action.payload;
      state.comments = [];
    },

    // * increaseLikesToPost
    [increaseLikesToPost.pending]: handlePending,
    [increaseLikesToPost.rejected]: handleRejected,
    [increaseLikesToPost.fulfilled](state, action) {
      const index = state.userPosts.findIndex(
        post => post.documentId === action.payload.documentId
      );
      state.userPosts.splice(index, 1, action.payload);
    },

    // *  addComments
    [addComments.pending]: handlePending,
    [addComments.rejected]: handleRejected,
    [addComments.fulfilled](state, action) {
      state.comments.push(action.payload.comment);

      const index = state.userPosts.findIndex(
        post => post.documentId === action.payload.post.documentId
      );
      state.userPosts.splice(index, 1, action.payload.post);

      state.performedOperation = statusOperation.addCommentOK;
    },

    // * getComments(postId)
    [getComments.pending]: handlePending,
    [getComments.rejected]: handleRejected,
    [getComments.fulfilled](state, action) {
      state.comments = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
