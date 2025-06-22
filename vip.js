// js/vip.js

import { auth, database } from "./firebase.js";
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  ref,
  update
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// 📌 Upgrade VIP Level
function activateVIP(level, price) {
  onAuthStateChanged(auth, (user) => {
    if (!user) return alert("Please login first.");

    const uid = user.uid;
    const userRef = ref(database, "users/" + uid);

    // Subtract price from balance
    // NOTE: In real system, you should check balance first on server.
    update(userRef, {
      vipLevel: level
    }).then(() => {
      alert("VIP " + level + " Activated!");
      window.location.href = "dashboard.html";
    });
  });
}

// 📥 Add event listeners
document.querySelectorAll(".vip-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const level = btn.getAttribute("data-vip");
    const price = parseFloat(btn.getAttribute("data-price"));
    activateVIP(level, price);
  });
}); 