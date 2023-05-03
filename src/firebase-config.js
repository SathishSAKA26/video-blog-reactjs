import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.evn.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.evn.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.evn.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.evn.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.evn.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.evn.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.evn.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
