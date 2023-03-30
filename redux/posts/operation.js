import {
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { createAsyncThunk } from '@reduxjs/toolkit';

// * 1 addPost
export const addPost = createAsyncThunk('posts/addPost', async post => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), post);
    post.documentId = docRef.id;

    return post;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// * 2 getPosts(userId)
export const getPosts = createAsyncThunk('posts/getPosts', async userId => {
  try {
    const q = query(collection(db, 'posts'), where('userId', '==', userId));

    const querySnapshot = await getDocs(q);

    const result = [];
    querySnapshot.forEach(doc => {
      const post = doc.data();
      post.documentId = doc.id;
      result.push(post);
    });
    //doc.id, " => ", doc.data()

    return result;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// * increaseLikeToPost(postId)
export const increaseLikesToPost = createAsyncThunk(
  'posts/increaseLikesToPost',
  async postId => {
    try {
      const docRef = doc(db, 'posts', postId);
      const docSnap = await getDoc(docRef);
      const post = docSnap.data();
      post.documentId = postId;
      post.countLikes += 1;

      await setDoc(doc(db, 'posts', postId), post);

      return post;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// * getComments(postId)
export const getComments = createAsyncThunk(
  'posts/getComments',
  async documentId => {
    try {
      console.log('getComments', documentId);

      const q = query(
        collection(db, 'comments'),
        where('documentId', '==', documentId)
      );

      const querySnapshot = await getDocs(q);

      const result = [];
      querySnapshot.forEach(doc => {
        const comment = doc.data();
        result.push(comment);
      });

      return result;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  addComments(postId)
export const addComments = createAsyncThunk(
  'posts/addComment',
  async comment => {
    try {
      const commentRef = await addDoc(collection(db, 'comments'), comment);
      const commentSnap = await getDoc(commentRef);
      const newComment = commentSnap.data();

      // Incress count comment
      const { documentId } = comment;
      const docRef = doc(db, 'posts', documentId);
      const docSnap = await getDoc(docRef);
      const post = docSnap.data();
      post.documentId = documentId;
      post.countComment += 1;
      await setDoc(doc(db, 'posts', documentId), post);

      return {
        comment: newComment,
        post: post,
      };

      // await
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
