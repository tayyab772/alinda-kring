// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDD7SbF-dz2bejMoV3pAthlPy2vhuDR7Vg",
  authDomain: "alinda-kring.firebaseapp.com",
  projectId: "alinda-kring",
  storageBucket: "alinda-kring.appspot.com",
  messagingSenderId: "255811630723",
  appId: "1:255811630723:web:490b15ef79f286236f0db6",
  measurementId: "G-2PVFY53XQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { analytics };


