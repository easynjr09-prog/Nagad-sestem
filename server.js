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
        label: "Nagad Deposit",
        wallet: "01341873797",
        color: "#FF5F2E",
        accent: "#b8256f",
        short: "NAGAD",
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
