// firebase.js

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// ✅ AfghaniTrader Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBigtOZ0h2KXVFssngAdELFAdCGZFiaPEg",
  authDomain: "afghanitrader.firebaseapp.com",
  databaseURL: "https://afghanitrader-default-rtdb.firebaseio.com",
  projectId: "afghanitrader",
  storageBucket: "afghanitrader.appspot.com",
  messagingSenderId: "887687935459",
  appId: "1:887687935459:web:10dc2c0082df6f045e5cd6",
  measurementId: "G-7QJ7ML5284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Export auth and database for use in other files
export { auth, database }; 