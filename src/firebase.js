// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOHjhv_6Ch70Hum7arIMNppkc90rsmvBU",
  authDomain: "dental-a8f70.firebaseapp.com",
  projectId: "dental-a8f70",
  storageBucket: "dental-a8f70.firebasestorage.app",
  messagingSenderId: "985437816360",
  appId: "1:985437816360:web:01cf98f7ea134155e5571d",
  measurementId: "G-D8GWJS51CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Database instances
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics conditionally (safeguards SSR / non-browser environments)
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics fallback
  });
}

export { app, auth, db, analytics };
export default app;
