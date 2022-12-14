import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmYKhzQE-cxQzEA0gE_UgME17tOoeRLZE",
  authDomain: "whatsapp-clone-3-ac20c.firebaseapp.com",
  projectId: "whatsapp-clone-3-ac20c",
  storageBucket: "whatsapp-clone-3-ac20c.appspot.com",
  messagingSenderId: "1097974143399",
  appId: "1:1097974143399:web:7ebcd381f88f1cc2533e82",
  measurementId: "G-1EFXG5PZRN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app); // authentication
export const provider = new GoogleAuthProvider(); // Google authentication
export default db;
