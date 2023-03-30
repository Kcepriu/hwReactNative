import { createSlice, createAction } from '@reduxjs/toolkit';
import { registerDB, logOutUser, logInUser } from './operation';

// const pending = createAction('pending');
// const fulfilled = createAction('fulfilled');
// const rejected = createAction('rejected');

const handlePending = state => {
  state.isRefresing = true;
  state.isAuth = false;
  state.isError = false;
  state.textError = null;
  state.user = {};
};

const handleRejected = (state, action) => {
  state.isRefresing = false;
  state.isAuth = false;
  state.isError = true;
  state.textError = action.payload;
  state.user = {};
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isRefresing: false,
    isAuth: false,
    isError: false,
    textError: null,
  },

  extraReducers: {
    // * registerDB
    // 1
    [registerDB.pending]: handlePending,
    // 2
    [registerDB.fulfilled](state, action) {
      //Зареєструвалися
      state.isRefresing = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    // 3
    [registerDB.rejected]: handleRejected,

    // * logInUser
    [logInUser.pending]: handlePending,
    [logInUser.fulfilled](state, action) {
      state.isRefresing = false;

      state.isAuth = true;
      state.user = action.payload;

      state.isError = false;
      state.textError = '';
    },
    [logInUser.rejected]: handleRejected,

    // * logOut
    [logOutUser.pending](state, action) {
      state.isError = false;
      state.textError = '';
    },
    [logOutUser.fulfilled](state, action) {
      state.isRefresing = false;

      state.isAuth = false;
      state.user = {};

      state.isError = false;
      state.textError = '';
    },
    [logOutUser.rejected](state, action) {
      state.isError = false;
      state.textError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {},
//     isRefresing: false,
//     isAuth: false,
//     isError: false,
//     textError: null,
//   },
// extraReducers: builder => {
//     // * registerDB`
//     // 1
//     builder.addCase(registerDB.pending, handlePending);

//     // 2
//     builder.addCase(registerDB.fulfilled, (state, action) => {
//       //Зареєструвалися
//       state.isRefresing = false;
//       state.isAuth = true;
//       state.user = action.payload;
//     });
//     // 3
//     builder.addCase(registerDB.rejected, handleRejected);
//     // * logInUser
//     builder.addCase(logInUser.pending, handlePending);
//     builder.addCase(logInUser.fulfilled, (state, action) => {
//       state.isRefresing = false;

//       state.isAuth = true;
//       state.user = action.payload;

//       state.isError = false;
//       state.textError = '';
//     });
//     builder.addCase(logInUser.rejected, handleRejected);
//     // * logOut
//     builder.addCase(logOutUser.pending, (state, action) => {
//       state.isError = false;
//       state.textError = '';
//     });

//     builder.addCase(logOutUser.fulfilled, (state, action) => {
//       state.isRefresing = false;

//       state.isAuth = false;
//       state.user = {};

//       state.isError = false;
//       state.textError = '';
//     });

//     builder.addCase(logOutUser.rejected, (state, action) => {
//       state.isError = false;
//       state.textError = action.payload;
//     });
//   },
// });
