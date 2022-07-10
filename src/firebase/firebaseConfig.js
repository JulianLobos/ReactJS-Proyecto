import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBemobk2nqFKKEh1_RGe4fZ3fu2cTSkJM8",
  authDomain: "jurold-photography.firebaseapp.com",
  projectId: "jurold-photography",
  storageBucket: "jurold-photography.appspot.com",
  messagingSenderId: "438045566640",
  appId: "1:438045566640:web:3925189ed3aea28ebc7d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
