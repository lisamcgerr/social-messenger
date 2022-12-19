import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMOpNUaRY24KSIrT8i_jLoVGQt3jsXdhU",
  authDomain: "social-msg-9fea5.firebaseapp.com",
  projectId: "social-msg-9fea5",
  storageBucket: "social-msg-9fea5.appspot.com",
  messagingSenderId: "292294384019",
  appId: "1:292294384019:web:183cff6781902c09adb066"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app); // authentication
export const googleProvider = new GoogleAuthProvider(); // Google authentication
export default db;
