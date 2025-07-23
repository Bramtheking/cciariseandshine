import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCXRPHgx9sFFNo9cMroH0rKAl1H5LLDgD4",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "cci-thika.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "cci-thika",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "cci-thika.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1030824729242",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1030824729242:web:1f017fe7c8f9e974439d23",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-LV1SF9S668",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
