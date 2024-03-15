import express from "express"
import mysql from "mysql"

const app = express()
const db  = mysql.createConnection({
    host: "local",
    user: "root",
    password: "password",
    database: "test",
})
//
app.get("/", (req,res) => {
    res.json("hello this is the backend")

})

//getting an error for EADDRINUSE so used this code to find available port
const server= app.listen(0,() => {
    const port = server.address().port;
    console.log("Connected to backend!");
})

