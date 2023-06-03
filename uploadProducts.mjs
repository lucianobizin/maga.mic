/* This file was executed to upload all elements into the database automatically

------- Console print
lucia@DESKTOP-HF9696H MINGW64 ~/Desktop/Intento/proj-react (main)
$ node --experimental-modules uploadProducts.mjs
Product 'Birth chart' uploaded successfully.
Product 'Sun revolution' uploaded successfully.
Product 'Transits' uploaded successfully.
Product 'Progressions' uploaded successfully.
Product 'Synastries' uploaded successfully.
Product 'Astrological MBTI' uploaded successfully.
Product 'Dice roll 2 questions' uploaded successfully.
Product 'Dice roll 3 questions' uploaded successfully.
Product 'Dice roll 4 questions' uploaded successfully.
Product 'Runes roll 2 questions' uploaded successfully.
Product 'Runes roll 3 questions' uploaded successfully.
Product 'Runes roll 4 questions' uploaded successfully.
Product 'Night of wine and tarot' uploaded successfully.
Product 'Female mythologies' uploaded successfully.
Product 'Astrological symbols evenings' uploaded successfully.
Product 'Chocolate, wine, and tarot' uploaded successfully.
Product 'Runes, dice, women, and more' uploaded successfully.
Product 'Awakening the feminine force' uploaded successfully.
Product 'Tarot deck' uploaded successfully.
Product 'Stones set' uploaded successfully.
Product 'Nordic runes' uploaded successfully.
Product 'Scented candle' uploaded successfully.
Product 'Dices for rolling' uploaded successfully.
Product 'Incense stick' uploaded successfully.
Product 'Introduction to Tarot' uploaded successfully.
Product 'Medium Tarot level' uploaded successfully.
Product 'Advanced Tarot level' uploaded successfully.
Product 'Introduction to Astrology' uploaded successfully.
Product 'Medium Astrology level' uploaded successfully.
Product 'Advanced Astrology level' uploaded successfully.
Product 'Astrological Houses' uploaded successfully.
Product 'Pyramid spread (Tarot)' uploaded successfully.
Product 'Tarot 2 questions' uploaded successfully.
Product 'Tarot 3 questions' uploaded successfully.
Product 'Tarot 4 questions' uploaded successfully.
Product '1 hour of Tarot' uploaded successfully.
All products uploaded successfully.
------------------------------------

import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { getProducts } from './src/products.mjs'; // products.mjs has all product descriptions

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "maga-mic.firebaseapp.com",
    projectId: "maga-mic",
    storageBucket: "maga-mic.appspot.com",
    messagingSenderId: "1084751926683",
    appId: "1:1084751926683:web:551c6ace9fcf43f685fd3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload products to Firestore
async function uploadProducts() {
    try {
        const products = await getProducts(); // Wait for the Promise to resolve and get the products array

        // Iterate over the products array
        for (const product of products) {
            // Add the product to Firestore
            await setDoc(doc(db, "Products", product.id), product);
            console.log(`Product '${product.name}' uploaded successfully.`);
        }
        console.log("All products uploaded successfully.");
    } catch (error) {
        console.error("Error uploading products:", error);
    }
}
// Calling function to upload the products
uploadProducts();

*/