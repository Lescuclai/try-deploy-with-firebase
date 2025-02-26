// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCo-zruxUPw6KdRww551lw2TyKP_eXgR24",
    authDomain: "test-deployed-app.firebaseapp.com",
    projectId: "test-deployed-app",
    storageBucket: "test-deployed-app.firebasestorage.app",
    messagingSenderId: "724956311042",
    appId: "1:724956311042:web:cfa5dc37b9926f0b3b411b",
    measurementId: "G-SJ8HNTE21L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);