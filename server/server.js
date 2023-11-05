//This file creates and initialises the app
//import dotenv before anything else, it will execute config and add any env variables before doing anything else in the code
require("dotenv").config();
//import express & morgan
const express = require("express")
const cors = require("cors")
const db = require("./db")  //when you do /db, it automatically looks for index.js that why we dont specify here.This is how we get access to pool.query
const morgan = require("morgan")
const port = process.env.PORT || 3001;
//create an instance of express and stored it in a variable called app
const app = express()

//make the app listen on a specific port and then do actions after it starts up
app.listen(port, () =>{
  console.log(`server is up and listening on port ${port}`)
}); 

//MIDDLEWARE CUSTOM EXAMPLE
//This needs to be first or it would never be used, it would hit the other routes and stop
//put middleware below app(it does some work before sending to next step which is the route handler->(req, res))
app.use((req, res, next) => {  //next allows the middleware to pass the request fown to the route handler -> req, res
  // console.log("the custom middleware")
  next();
});

//THIRD PARTY MIDDLEWARE
//3rd party already calls next, so you dont have to actually call it in the function
app.use(morgan("dev"));
//comes built in with express, when we send a request, it will take the info in the body of the request
//and it will attach it to our request object, and attach it under the property called body
app.use(express.json());  //this is how we can use "req.body", if we comment this req.body will be undefined
app.use(cors());

//to create a route we have to reference the app
//req and res are referred to as route handlers
//the reponse will be stored in "res"

//Get All Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    const results = db.query("select * from restaurants"); 
    results
    .then(function(data) {
      // console.log("get all restaurants", data.rows);
      return res.status(200).json({
        status:"success",
        results: data.rows.length,
        data: {
          restaurants: data.rows,
        },
      });
    }).catch(err => {
      console.log('Error: ', err.message);
    })
 
}) 

//Get a Reastaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  // console.log(req.params.id);

  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );
    // select * from restaurants wehre id = req.params.id

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );
    // console.log(reviews);

    res.status(200).json({
      status: "succes",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Go to Postman -> Body -> raw -> set as JSON -> enter json
//Create a Reastaurant
app.post("/api/v1/restaurants", async (req, res) => {
  // console.log(req.body)
  try{
    const results = await db.query(`INSERT INTO restaurants (name, location, price_range) values ($1,$2, $3) returning *`,   //After Inserting SQL doesnt show the inserted items, In order to see what you just enetered, you need "Returning *"
    [req.body.name, req.body.location, req.body.price_range]); //To prevent SQL injection attacks
    res.status(201).json({
      status:"success",
      data: {
        restaurant: results.rows[0],
      },
    });
  }catch(err){
    console.log(err)
  }
});

//Add a Restaurant
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    // console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
}); 

//Update a Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  try{
    const results = await db.query(`UPDATE restaurants SET name = $1, location = $2, price_range=$3 where id = $4 returning *`,
    [req.body.name, req.body.location, req.body.price_range, req.params.id]); //To prevent SQL injection attacks
    res.status(200).json({
      status:"success",
      data: {
        restaurant: results.rows[0],
      },
    });
  }catch(err){
    console.log(err)
  }
});

//Delete a Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try{
    const results = await db.query(`DELETE from restaurants where id = $1`, [req.params.id])
    res.status(204).json({
      status:"success",
    })
  }catch(err){
    console.log(err);
  }
});



