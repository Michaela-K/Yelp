//import pg library, but destructuring the Pool logic because thats all we want
const { Pool } = require('pg');

//creating a new Pool which is what will be connectign to our postgres database
const pool = new Pool();

  //here we are exporting the Query object, passing in a function that does a pool.query 
module.exports = {
  query: (text, params) => pool.query(text, params),
};