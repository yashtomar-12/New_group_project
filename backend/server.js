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
// Register New Donor
app.post('/register-donor', (req, res) => {

    const {
        full_name,
        email,
        phone,
        age,
        blood_group,
        city
    } = req.body;

    const sql = `
        INSERT INTO donors
        (full_name, email, phone, age, blood_group, city)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [full_name, email, phone, age, blood_group, city],
        (err, result) => {

            if (err) {
                console.log(err.message);
                return res.status(500).json({
                    message: "Donor registration failed"
                });
            }

            res.status(201).json({
                message: "Donor registered successfully!",
                donor_id: result.insertId
            });
        }
    );
});
// Get All Donors
app.get('/donors', (req, res) => {

    db.query('SELECT * FROM donors', (err, result) => {

        if (err) {
            console.log(err.message);
            return res.status(500).json({
                message: "Error fetching donors"
            });
        }

        res.json(result);
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});