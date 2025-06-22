// api/payment-callback.js
import express from 'express';
import fs from 'fs';
const router = express.Router();

// 📥 Webhook handler
router.post('/payment-callback', (req, res) => {
  const payment = req.body;

  // ✅ Check status
  if (payment.payment_status === "confirmed" || payment.payment_status === "finished") {
    const userId = payment.order_id; // تاسو کولی شئ userEmail یا UID ولیږئ
    const amount = parseFloat(payment.price_amount);

    // Log it or save to database (sample only - real DB save needed)
    const log = `${new Date().toISOString()} | USER: ${userId} | AMOUNT: ${amount} USD ✅\n`;
    fs.appendFileSync("payment-log.txt", log);

    // Send success response
    res.status(200).send("Payment recorded.");
  } else {
    res.status(400).send("Payment not completed.");
  }
});

export default router; 