//npm install express mongoose cors dotenv bcryptjs jsonwebtoken
const express = require("express"); //import express
const cors = require("cors");  //import cors 
require("dotenv").config(); //import env file 
const mainRouter = require("./routes/index");

const {PORT = 3005} = process.env;

const app = express();  
const mongoose = require("mongoose"); 

app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Job Tracker API is running");
});  

app.use("/", mainRouter)

mongoose.connect(process.env.MONGODB_URI) 
    .then(() => {
        console.log("Mongodb Running");
    }).catch((err) => {
        console.error("MongoDB connection error:", err)
    })


app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
})