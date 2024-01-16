const express = require ('express');
const connectDb = require("./config/db");
const dotenv = require('dotenv').config();


const app = express();
const port = 5000;

connectDb();

app.listen(port,()=> console.log("Le server a demarrer au port " + port ));