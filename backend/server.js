const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.send("Blood Donation Portal Backend is Running!");
});

// Server Port
const PORT = 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});