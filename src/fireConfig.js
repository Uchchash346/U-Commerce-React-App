
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEFvFqENJAi1sLZJjnW_ATLMaffioQAr4",
  authDomain: "u-commerce.firebaseapp.com",
  projectId: "u-commerce",
  storageBucket: "u-commerce.appspot.com",
  messagingSenderId: "622228764698",
  appId: "1:622228764698:web:6f6965ceab80f1e363f9a3",
  measurementId: "G-P6ZJ0WW6JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;