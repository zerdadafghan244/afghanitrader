// js/withdraw.js

document.getElementById("withdrawForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const wallet = document.getElementById("wallet").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if (!wallet || amount < 10) {
    alert("Minimum withdrawal is $10 and wallet address is required.");
    return;
  }

  // 📤 Send request to backend
  const res = await fetch("/api/handle-withdraw.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      wallet: wallet,
      amount: amount,
      date: new Date().toISOString()
    })
  });

  const data = await res.json();
  document.getElementById("result").innerText = data.message || "Request submitted.";
}); 