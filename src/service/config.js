import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD0WhpXhLdHU1AjQlb-U30kfvq6HY4tco0",
    authDomain: "maga-mic.firebaseapp.com",
    projectId: "maga-mic",
    storageBucket: "maga-mic.appspot.com",
    messagingSenderId: "1084751926683",
    appId: "1:1084751926683:web:551c6ace9fcf43f685fd3e"
};

export const db = getFirestore(app)
const app = initializeApp(firebaseConfig);