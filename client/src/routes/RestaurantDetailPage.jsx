import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const RestaurantDetailPage = () => {
  const {id} = useParams()
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

  useEffect(() => {
    const response = RestaurantFinder.get(`/${id}`); //import the api
    response
      .then((response) => {
        setSelectedRestaurant(response.data.data.restaurant)  //update our global state so we can tell the rest of our application what the selected rest. is
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);

  return (
    <div>{selectedRestaurant && selectedRestaurant.name} </div> // in case we havent retrieved the name yet, we dpnt want to get an error we want to wait for it to load
  )
}

export default RestaurantDetailPage