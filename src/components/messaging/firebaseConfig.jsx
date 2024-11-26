import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:`${import.meta.env.VITE_API_KEY}`,
authDomain:`${import.meta.env.VITE_URL_FIREBASE}`,
projectId: `${import.meta.env.VITE_PROJECT_ID}`,
    storageBucket: `${import.meta.env.VITE_storageBucket}`,
    messagingSenderId: `${import.meta.env.VITE_messagingSenderId}`,
    appId: `${import.meta.env.VITE_appId}`,
    measurementId: `${import.meta.env.VITE_measurementId}`,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
