// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-e4c7e.firebaseapp.com",
  projectId: "mernblog-e4c7e",
  storageBucket: "mernblog-e4c7e.appspot.com",
  messagingSenderId: "882823761673",
  appId: "1:882823761673:web:a3b305da9a19b08ee44dd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);