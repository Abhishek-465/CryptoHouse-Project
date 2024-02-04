// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, updateProfile, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYsyfzWEcDO8L_S7YiNTLyjwJ7VPDNaQI",
  authDomain: "cryptohack-8c692.firebaseapp.com",
  projectId: "cryptohack-8c692",
  storageBucket: "cryptohack-8c692.appspot.com",
  messagingSenderId: "575392622560",
  appId: "1:575392622560:web:70700c4c2f2ef6609e2d85",
  measurementId: "G-HDTTCGKV0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
export const db = getFirestore(app);