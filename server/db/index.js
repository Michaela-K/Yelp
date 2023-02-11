//import pg library but destreucturing the Pool logic because thats all we want
const { Pool } = require('pg')

//creatign a new Pool which is what will be connectign to our postgres database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  databse: 'yelp',
  password: '3001',
  port: "5432"
});

  //here we are exporting the Query object, passing in a function that does a pool.query 
  module.exports = {
    query: (text, params) => pool.query(text, params),
}