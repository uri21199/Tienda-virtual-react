
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyCd-WttfQZXw9m8QJbwCECvDKVxKUiKk",
  authDomain: "ecommerce-react-19760.firebaseapp.com",
  projectId: "ecommerce-react-19760",
  storageBucket: "ecommerce-react-19760.appspot.com",
  messagingSenderId: "980306502537",
  appId: "1:980306502537:web:11675383efcc6c6cb77758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default db;