// js/login.js

import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Firebase Login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}); 