import { initializeApp } from "firebase/app";
//import {getFireStore} from "firebase/firestore/compat";
//import { getFireStore, collection, addDoc } from 'firebase/firestore/compat';
import { getFirestore } from 'firebase/firestore/lite';


import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDHTE67wPUnQlo8_Q73gcj4J1_dCqvEZhE",
  authDomain: "blogproject-a3da7.firebaseapp.com",
  projectId: "blogproject-a3da7",
  storageBucket: "blogproject-a3da7.appspot.com",
  messagingSenderId: "909734268176",
  appId: "1:909734268176:web:fe58c0578aa749fd21e995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


