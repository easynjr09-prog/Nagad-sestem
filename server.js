const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/public/payment-config", (req, res) => {
  res.json({
    methods: {
      bKash: {
        label: "BKASH Deposit",
        wallet: "01713876408",
        color: "#e2136e",
        accent: "#b8256f",
        short: "bKash",
        action: "ক্যাশ আউট",
        theme: "cash_out"
      }
    },
    warning: "কম বা বেশি ক্যাশ আউট করবেন না"
  });
});

app.get("/", (req, res) => {
  res.type("text").send("Payment configuration server is running.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
