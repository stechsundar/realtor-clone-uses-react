import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8RUmmBYPukvgkXtJ2deTNhsoH23UNqBM",
  authDomain: "realtor-practice-929c2.firebaseapp.com",
  projectId: "realtor-practice-929c2",
  storageBucket: "realtor-practice-929c2.appspot.com",
  messagingSenderId: "963430433711",
  appId: "1:963430433711:web:b10c6bc63b59befdc2255a"
};

initializeApp(firebaseConfig);
export const db = getFirestore()
