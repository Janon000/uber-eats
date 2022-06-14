import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9y9JKJciv30jZJgwH27G9zxrYImjMGXQ",
    authDomain: "uber-eats-351916.firebaseapp.com",
    projectId: "uber-eats-351916",
    storageBucket: "uber-eats-351916.appspot.com",
    messagingSenderId: "962896818210",
    appId: "1:962896818210:web:a8af1f0d1002c8ca525a7b",
    measurementId: "G-NM5HPER7JK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
