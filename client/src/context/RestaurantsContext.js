//stores the list of restaurants in the aapplication
import React, {useState, createContext} from "react";

//create context
export const RestaurantsContext = createContext();

//create the context provider component
export const RestaurantsContextProvider = props => {
  //use the useState to store the list of restaurants
  const [restaurants, setRestaurants] = useState([])

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return(
    <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}
