import express from "express"
import mysql from "mysql"

const app = express()
const db  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "test"
})
//
// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});


app.get("/", (req,res) => {
    res.json("hello this is the backend.")

})

app.get("/books", (req, res) => {
    const query = "SELECT * FROM books";
    db.query(query, (err, data) => {
        if (err) {
            console.error("Error executing MySQL query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json(data);
    });
});

app.listen(8800,() => {
    console.log("Connected to backend!");
})

