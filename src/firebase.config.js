// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_pImWEFWwdEhrFs_OIYMwg6xQPj8C1zU",
  authDomain: "volunteen-network-b3d56.firebaseapp.com",
  projectId: "volunteen-network-b3d56",
  storageBucket: "volunteen-network-b3d56.appspot.com",
  messagingSenderId: "300349876056",
  appId: "1:300349876056:web:aa0bf74b1d71dcd75da72d",
  measurementId: "G-TLNPHV6YF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;