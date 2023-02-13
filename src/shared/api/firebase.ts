import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
    projectId: `${process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: "94632302465",
    appId: "1:94632302465:web:234ddce9083ed9d6bfba80"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db,app}