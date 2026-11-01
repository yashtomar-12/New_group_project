const express = require("express");
const db = require("./db");

const app = express();

// Middleware
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.send("Blood Donation Portal Backend is Running!");
});

// Test Database API
app.get("/test-db", (req, res) => {
    db.query("SELECT 1", (err, result) => {
        if (err) {
            console.log("Database Error:", err.message);
            return res.status(500).send("Database Error");
        }

        res.send("Database Connected Successfully!");
    });
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});