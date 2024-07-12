// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhPn86VYo0sh6kyJxO3SZqhDx7DmH5lM",
  authDomain: "rezza-makeup.firebaseapp.com",
  projectId: "rezza-makeup",
  storageBucket: "rezza-makeup.appspot.com",
  messagingSenderId: "1073261420406",
  appId: "1:1073261420406:web:87fb1d7a3a37a83ef12457"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { db, auth, storage };
