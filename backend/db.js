const mysql = require('mysql2');
require('dotenv').config();
console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306
});
db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.code, err);
    } else {
        console.log("MySQL Database Connected Successfully!");
    }
});

module.exports = db;