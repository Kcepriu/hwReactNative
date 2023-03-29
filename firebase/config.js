import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDrbd16zHbaw7ttOyIyQ-jJs5tmn06aYhU',
  authDomain: 'appposts-54281.firebaseapp.com',
  databaseURL:
    'https://appposts-54281-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'appposts-54281',
  storageBucket: 'appposts-54281.appspot.com',
  messagingSenderId: '424561404753',
  appId: '1:424561404753:web:8795e6cbbdb19906360170',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
