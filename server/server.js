//This file createa and initialises the app
//import dotenv before anything else
require("dotenv").config();
//import express & morgan
const express = require("express")
const morgan = require("morgan")
//create an instance of express and stored it in a variable called app
const port = process.env.PORT || 3002;
const app = express()

//MIDDLEWARE CUSTOM EXAMPLE
//This needs to be first or it would never be used, it would hit the other routes and stop
//put middleware below app(it does some work before sending to next step which is the route handler->(req, res))
app.use((req, res, next) => {  //next allows the middleware to pass the request fown to the route handler -> req, res
  console.log("the custom middleware")
  next();
});

//THIRD PARTY MIDDLEWARE
//3rd party already calls next, so you dont have to actually call it in the function
app.use(morgan("dev"));
//comes built in with express, when we send a request, it will take the info in the body of the request
//and it will attach it to our request object, and attach it under the property called body
app.use(express.json());  //this is how we can use "req.body"

//to create a route we have to reference the app
//req and res are referred to as route handlers
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
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params)
  // res.status(200).json({
  //   status:"success",
  //   data: {
  //     restaurant: ["Mc Donalds", "Wendy/'s"]
  //   },
  // })
})  

//Go to Postman -> Body -> raw -> set as JSON -> enter json
//Create a Reastaurant
app.post("/api/v1/restaurants/", (req, res) => {
  console.log(req.body)
});

//make the app listen on a specific port and then do actions after it starts up
app.listen(port, () =>{
  console.log(`server is up and listening on port ${port}`)
}); 