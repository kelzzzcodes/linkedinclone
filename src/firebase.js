//  Using Firebase version 9 for the following import and setup
import {initializeApp} from 'firebase/app';
import {
  getFirestore
} from 'firebase/firestore';
import {getAuth}  from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyA8AxOdyj_s64LfXR15P-KaBk7qzJK4kSY",
    authDomain: "linkedinclone-fde0d.firebaseapp.com",
    projectId: "linkedinclone-fde0d",
    storageBucket: "linkedinclone-fde0d.appspot.com",
    messagingSenderId: "715048266440",
    appId: "1:715048266440:web:c95cf9a548767fb843d3fd"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
export {auth, provider, storage};
export default db;

