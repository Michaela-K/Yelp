//This file createa and initialises the app
//import dotenv before anything else
require("dotenv").config();
//import express
const express = require("express")

//create an instance of express and stored it in a variable called app
const port = process.env.PORT || 3002;
const app = express()

//to create a route we have to reference the app
//the reponse will be stored in "res"

//Get All Restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("get all restaurants")
  res.status(200).json({
    status:"success",
    data: {
      restaurant: ["Mc Donalds", "Wendy/'s"]
    },
  })
})  

//Get a Reastaurant

//make the app listen on a specific port and then do actions after it starts up
app.listen(port, () =>{
  console.log(`server is up and listening on port ${port}`)
}); 