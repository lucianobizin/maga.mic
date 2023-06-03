import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "maga-mic.firebaseapp.com",
    projectId: "maga-mic",
    storageBucket: "maga-mic.appspot.com",
    messagingSenderId: "1084751926683",
    appId: "1:1084751926683:web:551c6ace9fcf43f685fd3e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)