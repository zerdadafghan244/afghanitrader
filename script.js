// js/script.js

// 👁️‍🗨️ Toggle password visibility
document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = document.getElementById(this.dataset.target);
    if (input.type === "password") {
      input.type = "text";
      this.textContent = "🙈"; // Hide icon
    } else {
      input.type = "password";
      this.textContent = "👁️"; // Show icon
    }
  });
});

// 🔗 Copy referral link
const copyBtn = document.getElementById("copyReferral");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const input = document.getElementById("referralLink");
    input.select();
    document.execCommand("copy");
    alert("Referral link copied!");
  });
}

// 🟢 Add loading spinner (optional future feature)
// 🟢 Add scroll to top, dark mode toggle, etc. 