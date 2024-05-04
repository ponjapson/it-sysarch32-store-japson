// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqygZeEXHR22lmhfVY3igHveZZ60WS8-8",
  authDomain: "it-sysarch32-store-japson.firebaseapp.com",
  projectId: "it-sysarch32-store-japson",
  storageBucket: "it-sysarch32-store-japson.appspot.com",
  messagingSenderId: "712724456049",
  appId: "1:712724456049:web:9a144a41a8adcbfacab1d0",
  measurementId: "G-G76VC3SHK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
