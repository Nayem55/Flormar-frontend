// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwh7MXCa7D8BbZrL-a4I-V0kUkdlNS8Lc",
  authDomain: "fragrance-4bbe1.firebaseapp.com",
  projectId: "fragrance-4bbe1",
  storageBucket: "fragrance-4bbe1.appspot.com",
  messagingSenderId: "115627811394",
  appId: "1:115627811394:web:bf302c7dc2fc52d1bac3db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;