import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVVBxn0t-0vMEu4PgzQiEbRX4b18u22Go",
  authDomain: "thegram-schidobvu.firebaseapp.com",
  projectId: "thegram-schidobvu",
  storageBucket: "thegram-schidobvu.appspot.com",
  messagingSenderId: "828815070392",
  appId: "1:828815070392:web:3634e3afeabf68882e504d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, storage, auth, provider };
