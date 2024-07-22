// Import functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd5cuwUNpWnhMvIY2VnjkKYRfNbEXgqJQ",
  authDomain: "blogproject-b498e.firebaseapp.com",
  projectId: "blogproject-b498e",
  storageBucket: "blogproject-b498e.appspot.com",
  messagingSenderId: "962670745351",
  appId: "1:962670745351:web:6669a351c58b5e8c6a97a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);

// Export services
export { db, auth };
