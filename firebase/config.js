import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDusreJN30v2KHM26zkyQBxD8BDsqoHOqg',
  authDomain: 'my-posts-cc042.firebaseapp.com',
  projectId: 'my-posts-cc042',
  storageBucket: 'my-posts-cc042.appspot.com',
  messagingSenderId: '296484732087',
  appId: '1:296484732087:web:d5037fd46a40ca182c6132',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
