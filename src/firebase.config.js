

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbOJpQHp1oTbiyFfGDrfS0aiZzCIVgAG8",
  authDomain: "newtask312.firebaseapp.com",
  databaseURL: "https://newtask312-default-rtdb.firebaseio.com",
  projectId: "newtask312",
  storageBucket: "newtask312.appspot.com",
  messagingSenderId: "571760168865",
  appId: "1:571760168865:web:50799cc9a156b24e9c45e0"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
