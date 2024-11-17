const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://harivignesh0506:zkN5zz1Zxtus9B4Y@cluster0.dy0ek.mongodb.net/Server001?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("mongoDB Connected...");

    
})
.catch ((err) => {
    
    console.log(`connection error: ${err.message}`);
    
});
