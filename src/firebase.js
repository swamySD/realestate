// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:String(process.env.API_KEY),
  authDomain: String(process.env.AUTH_DOMAIN),
  projectId: String(process.env.PROJECT_ID),
  storageBucket:String(process.env.STORAGE_BUCKET),
  messagingSenderId: String(process.env.MESSAGING_SENDER_ID),
  appId:String(process.env.APP_ID)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);