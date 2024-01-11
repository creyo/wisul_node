// index.js
const express = require('express');
const serverless = require("serverless-http");
const router = require("./routes/route");
const generatedToken = require('./middleware/middleware');
const app = express();
const port = 3000; // Replace with the desired port number

// Uncomment for additional logging
// console.log(generatedToken);  
  
app.use("/", router);
// Use the router for handling routes in Netlify environment
app.use(`/.netlify/functions/index`, router);
  
// Use the router for handling regular routes


// Start the server
module.exports = app;
module.exports.handler = serverless(app);
