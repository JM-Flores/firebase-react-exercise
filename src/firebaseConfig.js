// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-qROpMw-2ZFRYRxYa1yO3ezyrZ6e0O0",
  authDomain: "fir-test-64858.firebaseapp.com",
  projectId: "fir-test-64858",
  storageBucket: "fir-test-64858.firebasestorage.app",
  messagingSenderId: "570405926485",
  appId: "1:570405926485:web:46c572473d395a836106dc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
