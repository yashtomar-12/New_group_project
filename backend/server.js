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
const db = require('./db');
app.get('/test-db', (req, res) => {
    db.query('SELECT 1', (err, result) => {
        if (err) {
            return res.status(500).send('Database Error');
        }

        res.send('Database Connected Successfully!');
    });
});