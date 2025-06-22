// js/lang.js

// ژبې فایلونه (English او پښتو)
const languages = {
  en: {
    register: "Register",
    login: "Login",
    logout: "Logout",
    dashboard: "Dashboard",
    deposit: "Deposit",
    withdraw: "Withdraw",
    vip: "VIP Plans",
    tasks: "Tasks",
    team: "Team",
    settings: "Settings",
    contact: "Contact",
    welcome: "Welcome",
  },
  ps: {
    register: "راجسټر",
    login: "ننوتل",
    logout: "وتل",
    dashboard: "ډیشبورډ",
    deposit: "جمع کول",
    withdraw: "ایستل",
    vip: "VIP پلانونه",
    tasks: "دندې",
    team: "ټیم",
    settings: "تنظیمات",
    contact: "اړیکه",
    welcome: "ښه راغلاست",
  }
};

// د ژبې بدلون function
function switchLanguage() {
  const current = localStorage.getItem("lang") || "en";
  const next = current === "en" ? "ps" : "en";
  localStorage.setItem("lang", next);
  applyLanguage(next);
}

// د ژبې تطبیق function
function applyLanguage(lang) {
  const dict = languages[lang];
  for (const key in dict) {
    const el = document.getElementById(key);
    if (el) el.textContent = dict[key];
  }
}

// ✅ لومړی ځل چې صفحه لوستل شي
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);
}); 