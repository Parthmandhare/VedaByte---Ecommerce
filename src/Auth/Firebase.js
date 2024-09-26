// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLOWOlRARQAi5eKHVM0R29d6EHkJZITIs",
  authDomain: "vedabytes.firebaseapp.com",
  projectId: "vedabytes",
  storageBucket: "vedabytes.appspot.com",
  messagingSenderId: "642650740532",
  appId: "1:642650740532:web:167505fde995b53420b761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage();

// const imageDb = getStorage(app);

export {app, auth, db, storage };