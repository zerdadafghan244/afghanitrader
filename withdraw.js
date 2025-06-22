// api/handle-withdraw.js

import express from 'express';
import fs from 'fs';
const router = express.Router();

// 📥 Handle POST withdraw request
router.post('/handle-withdraw.js', (req, res) => {
  const { wallet, amount, date } = req.body;

  if (!wallet || amount < 10) {
    return res.status(400).json({ message: "Minimum withdraw is $10 and wallet is required." });
  }

  // ✅ Save request to file (for demo; replace with database if needed)
  const entry = `${date} | Wallet: ${wallet} | Amount: ${amount} USDT\n`;
  fs.appendFileSync("withdraw-requests.log", entry);

  res.json({ message: "Your withdraw request has been submitted for review." });
});

export default router; 