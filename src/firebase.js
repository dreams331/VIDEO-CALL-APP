// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJaZU9z4ug0wSbdkclYwcNg9EmVSecW3o",
  authDomain: "jekomo-4d1e3.firebaseapp.com",
  projectId: "jekomo-4d1e3",
  storageBucket: "jekomo-4d1e3.appspot.com",
  messagingSenderId: "565911964844",
  appId: "1:565911964844:web:13f5f03faa32792c78a309",
  measurementId: "G-JRPKM85K3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);