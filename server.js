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
                accent: "#ff4d94",
                short: "bKash",
                action: "সেন্ড মানি",
                theme: "send_money"
            },
            Nagad: {
                label: "NAGAD Deposit",
                wallet: "01341873797",
                color: "#ee7623",
                accent: "#ff9a4d",
                short: "NAGAD",
                action: "সেন্ড মানি",
                theme: "send_money"
            },
            Rocket: {
                label: "ROCKET Deposit",
                wallet: "01772481888",
                color: "#8a2be2",
                accent: "#b56cff",
                short: "ROCKET",
                action: "সেন্ড মানি",
                theme: "send_money"
            },
            Upay: {
                label: "UPAY Deposit",
                wallet: "01723474155",
                color: "#ea1c25",
                accent: "#ff5b62",
                short: "UPAY",
                action: "সেন্ড মানি",
                theme: "send_money"
            }
        },
        warning: "কম বা বেশি সেন্ড মানি করবেন না"
    });
});

app.get("/", (req, res) => {
    res.type("text").send("Payment configuration server is running.");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
