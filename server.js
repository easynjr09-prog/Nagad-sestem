const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 0;

app.use(cors());
app.use(express.json());

app.get("/api/public/payment-config", (req, res) => {
  res.json({
    methods: {
      Nagad: {
        label: "NAGAD Deposit",
        wallet: "01341873797",
        color: "#EE4B2B",
        accent: "#F33A89",
        short: "Nagad",
        action: "ক্যাশ_আউট",
        theme: "send_money"
      }
    },
    warning: "কম বা বেশি ক্যাশ আউট করবেন না."
  });
});

app.get("/", (req, res) => {
  res.type("text").send("Payment configuration server is running.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
