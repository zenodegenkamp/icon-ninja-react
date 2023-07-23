import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBBRjPNjLHP9_6cOfZkJO8s73Fx-GjLs7w",
  authDomain: "iconninja-91b46.firebaseapp.com",
  projectId: "iconninja-91b46",
  storageBucket: "iconninja-91b46.appspot.com",
  messagingSenderId: "944808603598",
  appId: "1:944808603598:web:4e9623d8f70d5578d8c59f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const scoresCollection = collection(db, "scores")