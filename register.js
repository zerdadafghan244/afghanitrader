// js/register.js

import { auth, database } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  ref,
  set
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// 📌 Register Function
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value.trim();
  const inviteCode = document.getElementById("invite").value.trim();

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  // ✅ Create User in Firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Set username as displayName
      updateProfile(user, {
        displayName: username
      });

      // Save in Firebase Realtime Database
      return set(ref(database, 'users/' + user.uid), {
        email: email,
        username: username,
        phone: phone,
        country: country,
        inviteCode: inviteCode,
        balance: 0,
        vipLevel: "Free",
        registeredAt: new Date().toISOString()
      });
    })
    .then(() => {
      alert("Registered Successfully!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}); 