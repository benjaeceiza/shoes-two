import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzLceUg-8E-Q7XlrIjVKeu9KsaVHZI6tM",
  authDomain: "sneaker-shop-9415e.firebaseapp.com",
  projectId: "sneaker-shop-9415e",
  storageBucket: "sneaker-shop-9415e.appspot.com",
  messagingSenderId: "922755389721",
  appId: "1:922755389721:web:0c945e8a835a11de708d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> 
)
