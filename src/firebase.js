import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-QPR_JobtsQ0n8jX3j4h89abwhPE7pFQ",
  authDomain: "react-chat-app-fcafc.firebaseapp.com",
  projectId: "react-chat-app-fcafc",
  storageBucket: "react-chat-app-fcafc.appspot.com",
  messagingSenderId: "829959317295",
  appId: "1:829959317295:web:b42d5a24de5298b1b523da",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider, db };
