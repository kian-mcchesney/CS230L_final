import express from "express"
import mysql from "mysql"
import cors from 'cors'




const app = express();

const db  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "test"
})
// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

app.use(express.json())
app.use(cors())

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

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`, `description`,`price` , `cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];
    db.query(q,[values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/books/:id", (req, res) => {
    const bookID = req.params.id;
    const q = " DELETE FROM books WHERE ID = ? ";
  
    db.query(q, [bookID], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.put("/books/:id",(req,res)=>{
const bookID=req.params.id;
const q =  "UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE ID = ?";
const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
    
];

db.query(q,[...values,bookID], (err,data)=> {
    if(err) return jes.send(err);
    return jes.json(data);
})


  })
  

app.listen(8800,() => {
    console.log("Connected to backend!");
})
