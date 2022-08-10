import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyA8AxOdyj_s64LfXR15P-KaBk7qzJK4kSY",
    authDomain: "linkedinclone-fde0d.firebaseapp.com",
    projectId: "linkedinclone-fde0d",
    storageBucket: "linkedinclone-fde0d.appspot.com",
    messagingSenderId: "715048266440",
    appId: "1:715048266440:web:c95cf9a548767fb843d3fd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth, provider, storage};
export default db;

