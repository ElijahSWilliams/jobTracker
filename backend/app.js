//npm install express mongoose cors dotenv bcryptjs jsonwebtoken
const express = require("express"); //import express
const cors = require("cors");  //import cors 

const app = express(); 

app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Job Tracker API is running");
}); 

app.listen(3005, () => {
    console.log("Server running on port 3001");
})