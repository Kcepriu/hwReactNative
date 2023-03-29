import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config';

export const registerDB = createAsyncThunk(
  'auth/registerDB',

  async ({ login, email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });

      {
        const { displayName, email, photoURL, uid } = auth.currentUser;
        return { displayName, email, photoURL, uid };
      }
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      {
        const { displayName, email, photoURL, uid } = auth.currentUser;
        return { displayName, email, photoURL, uid };
      }
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk('auth/logOutUser', async () => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

//Listener
export const addListennerStateChangeAuth = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      // //Якщо ще не залогінилися, то оновити стейт
      // const { displayName, email, photoURL, uid } = user;
      // console.log('Log in', user);
    } else {
      // //Очистити стейт
      // console.log('Log Out');
    }
  });
};
