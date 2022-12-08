import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyClXRHPJI4tFGD5C-PvtXwthdOPr-svTQY",
    authDomain: "social-messenger-4ac0c.firebaseapp.com",
    projectId: "social-messenger-4ac0c",
    storageBucket: "social-messenger-4ac0c.appspot.com",
    messagingSenderId: "1041589060789",
    appId: "1:1041589060789:web:d01d092cd0dc13bb3f2afc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app); // authentication
export const provider = new GoogleAuthProvider(); // Google authentication
export default db;
