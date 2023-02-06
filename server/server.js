//This file createa and initialises the app
//import dtenv before anything else
require("dotenv").config();
//import express
const express = require("express")

//create an instance of express and stored it in a variable called app
const port = 3001;
const app = express()
//make the app listen on a specific port and then do actions after it starts up
app.listen(port, () =>{
  console.log(`server is up and listening on port ${port}`)
}); 