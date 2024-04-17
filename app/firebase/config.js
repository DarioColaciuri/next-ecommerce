import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG2CJmRR0Y30njUiRqb3wOmxQIh-aRxZw",
  authDomain: "next-ecommerce-9df1d.firebaseapp.com",
  projectId: "next-ecommerce-9df1d",
  storageBucket: "next-ecommerce-9df1d.appspot.com",
  messagingSenderId: "28918070826",
  appId: "1:28918070826:web:578af3ef95e94d04decd53"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }