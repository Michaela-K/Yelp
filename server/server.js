//This file createa and initialises the app

//import express
const express = require("express")

//create an instance of express and stored it in a variable called app
const app = express()
//make the app listen on a specific port and then do actions after it starts up
app.listen(3001, () =>{
  console.log("server is up and listening on port 3001")
});