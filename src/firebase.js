// Import the necessary functions from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
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

// Get the Auth instance from the Firebase app
const auth = getAuth(app);

// Export the auth object to use it in other parts of your application
export { auth };