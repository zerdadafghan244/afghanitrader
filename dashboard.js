// js/dashboard.js

import { auth, database } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// 🔐 Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;
    const userRef = ref(database, "users/" + userId);

    // 📥 Fetch user info from Firebase
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        document.getElementById("email").innerText = data.email || "N/A";
        document.getElementById("username").innerText = data.username || "User";
        document.getElementById("vipLevel").innerText = data.vipLevel || "Free";
        document.getElementById("balance").innerText = data.balance?.toFixed(2) + " USDT" || "0 USDT";
        document.getElementById("referralLink").value =
          `${window.location.origin}/register.html?ref=${user.uid}`;
      }
    });
  } else {
    // ❌ Redirect to login if not authenticated
    window.location.href = "login.html";
  }
});

// 🚪 Logout button
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}); 