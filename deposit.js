document.addEventListener('DOMContentLoaded', () => {
  const depositBtn = document.getElementById('depositBtn');
  const amountInput = document.getElementById('depositAmount');
  const apiKey = "5N83NDJ-4MN4MVE-GC2KDFA-T5SW7TW"; // ستا API Key

  depositBtn.addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount < 10) {
      alert("❗ Minimum deposit is $10.");
      return;
    }

    try {
      // Firebase user info
      const user = firebase.auth().currentUser;
      if (!user) {
        alert("Please login to continue.");
        return;
      }

      const response = await fetch("https://api.nowpayments.io/v1/payment", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          price_amount: amount,
          price_currency: "usd",
          pay_currency: "usdttrc20",
          order_id: user.uid,
          order_description: "AfghaniTrader Deposit",
          ipn_callback_url: "https://afghanitrader.com/api/payment-callback"
        })
      });

      const data = await response.json();

      if (data && data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        console.error(data);
        alert("Payment error: " + (data.message || "Unknown error"));
      }

    } catch (error) {
      console.error(error);
      alert("Network error. Try again.");
    }
  });
});