# Payment Config Server

## Run locally
1. Install Node.js.
2. Open this folder in a terminal.
3. Run:
   npm install
   npm start

The endpoint will be:
http://localhost:3000/api/public/payment-config

## Deploy
Deploy this folder to a Node.js hosting provider that supports an Express app.
After deployment, use:
https://YOUR-DOMAIN/api/public/payment-config

in the extension's configuration URL.

## Change bKash number
Edit `server.js` and change:
wallet: "01706616722"
