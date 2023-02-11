//This file createa and initialises the app
//import dotenv before anything else
require("dotenv").config();
//import express & morgan
const express = require("express")
const db = require("./db")  //when you do /db, it automatically looks for index.js that why we dont specify here. This is how we get access to pool.query
const morgan = require("morgan")
//create an instance of express and stored it in a variable called app
const port = process.env.PORT || 3001;
const app = express()

//make the app listen on a specific port and then do actions after it starts up
app.listen(port, () =>{
  console.log(`server is up and listening on port ${port}`)
}); 

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
app.get("/api/v1/restaurants", async (req, res) => {
  //this db.query will returna promise because it takes some time
  const results = await db.query("select * from restaurants") 
  console.log("get all restaurants")
  console.log(results);
  res.status(200).json({
    status:"success",
    data: {
      restaurant: "Mc Donalds"
    },
  })
})  

//Get a Reastaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params)
  res.status(201).json({
    status:"success",
    data: {
      restaurant: "Mc Donalds"
    },
  })
})  

//Go to Postman -> Body -> raw -> set as JSON -> enter json
//Create a Reastaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body)
  res.status(201).json({
    status:"success",
    data: {
      restaurant: "Mc Donalds"
    },
  })
});

//Update a Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status:"success",
    data: {
      restaurant: "Mc Donalds"
    },
  })
});

//Delete a Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status:"success",
  })
});

