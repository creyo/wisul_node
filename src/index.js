// index.js
const express = require('express');
const router = require("./routes/route")
const generatedToken = require('./middleware/middleware')
const app = express();
const port = 3000; // Replace with the desired port number


//console.log(generatedToken)

// Use the router for handling routes
app.use("/", router);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
