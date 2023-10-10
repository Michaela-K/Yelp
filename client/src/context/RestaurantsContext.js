//stores the list of restaurants in the aapplication
import React, {useState, createContext} from "react";

//create context
export const RestaurantsContext = createContext();

//create the context provider component
export const RestaurantsContextProvider = props => {
  //use the useState to store the list of restaurants
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null) //This is so the entire of the application has access/knows what the user selected


  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return(
    <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}
