import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJaYOfrnmq5JJKKa_eqRu_uePZTatDHkI",
  authDomain: "fir-project-fc884.firebaseapp.com",
  projectId: "fir-project-fc884",
  storageBucket: "fir-project-fc884.appspot.com",
  messagingSenderId: "476329416110",
  appId: "1:476329416110:web:8da633edd9a3171058243f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);