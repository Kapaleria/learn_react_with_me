const express = require("express"); //use the express dependency

const app = express(); //create an express app
//CRUD operations
//Create, Read, Update, Delete
//post, get, put, delete 
//saving a phone number

app.get ("/", (req,res)=>{console.log("Express is running")})

app.listen(3001, ()=>{console.log("server is running")})


