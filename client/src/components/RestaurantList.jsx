import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useNavigate } from 'react-router-dom'

const RestaurantList = (props) => {  //everything has access to context api beacuse it wraps it in App.js
  //import use context and the context to store the data retrieved
  const {restaurants, setRestaurants} = useContext(RestaurantsContext)  //restaurants and setRestaurants comes from the RestaurantContext.js

  let history = useNavigate(); //this history Obj represents the history of our browser
  // console.log(history)

  //to get/fetch the data to mount as soon as you open is by using useEffect, This runs when the component 1) mounts and when it 2)re renders, unless you put empty []
  useEffect(() => {
    //USING TRY CATCH 

  //   //this use effect hook DOES NOT LIKE IT when we return anything, thats why we need to put it in this fetchData function and call it. 
  //   //This function returns, no the useEffect
  //   const fetchData = async () => {
  //   try{
  //     const response =  await RestaurantFinder.get("/"); // here its just a slash because it goes to the baseURL in the RestaurantFinder api file and adds a slah to the emd of that baseURL
  //     console.log(response);  //this use effect hook does not like it when we return anything
  //     //When we use async await, we implicitly return a Promise which useEffect does not like, so we created this fetchData fn to deal with it so the useEffect isnt returning anything, the fn is.
  //     setRestaurants(response.data.data.restaurants)
  //   }catch (err){
  //     console.log(err.message);
  //   };
  // };
  //   fetchData(); 

    //USING PROMISES
  const response = RestaurantFinder.get("/");
  response
    .then((response) => {
      setRestaurants(response.data.data.restaurants)  //store the restaurants 
    })
    .catch((err) => {
      console.log(err.message);
    });


  }, [])  //empty array is put here so it will only run when it mounts and never again

  const handleDelete = async (e, id) => {
    // e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };


  const handleUpdate = (id) => {
    // e.stopPropagation();
    //Here we are adding this URL into the history stack
    //With useNavigate(), we do not need .push   It will automatically push the user to whatever route is specified
    history(`/restaurants/${id}/update`);
  };

  return (
    <div>
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Restaurant</th>
      <th scope="col">Location</th>
      <th scope="col">Price Range</th>
      <th scope="col">Ratings</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  { restaurants && // this line is in case the data doesnt load. It is asking if restaurants exist
    restaurants.map((restaurant) => {
      return (
        <tr key={restaurant.id} >{/* wrap the key around everything to get rid of the "key" error */}
        <td>{restaurant.name}</td>
        <td>{restaurant.location}</td>
        <td>{"$".repeat(restaurant.price_range)}</td>
        <td>{restaurant.ratings}</td>
        <td>
          {/* if you are going to pass an arguement into this function handle... you need to add ()=> infront, because we dont want to run it right away, we only want to run it when it is clicked */}
          <button onClick={() => handleUpdate(restaurant.id)} className="btn btn-warning" > Update </button>
        </td>
        <td>
          <button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger" > Delete </button>
        </td>
       </tr>
      );
    })}
  </tbody>
</table>
    </div>
  )
}

export default RestaurantList