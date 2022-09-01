const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(5000,()=>{
  console.log(`App listening at 5000`)
});