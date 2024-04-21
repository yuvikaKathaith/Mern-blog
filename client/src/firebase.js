// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-31894.firebaseapp.com",
  projectId: "mern-blog-31894",
  storageBucket: "mern-blog-31894.appspot.com",
  messagingSenderId: "577874540116",
  appId: "1:577874540116:web:7855f3be00a184bdf25fc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);