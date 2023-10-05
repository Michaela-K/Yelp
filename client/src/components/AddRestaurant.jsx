import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  // Controlled inputs -> useState
  //By default HTML manages state, but React wants to control state in the application
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range"); 

  //access the Context in all components like this
  const {addRestaurants} = useContext(RestaurantsContext); //here we import addRestaurants from the context api and destructure it to use it

  const handleSubmit = (e) => {  //This will add(post) the restaurant to the database
    e.preventDefault(); //Reloading the page will cause us to loose state and we don't want that

    const response = RestaurantFinder.post("/", 
    {
      name: name,
      location: location,
      price_range: priceRange,
    })

    response.then((response) =>{
      addRestaurants(response.data.data.restaurant);
      console.log(response.data.data)
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className='mb-4 w-100 p-3' style={{backgroundColor: '#eee'}}>
      {/* Form */}
      <form action='w-100'>
        {/* Row */}
        <div className="w-100 form-row d-flex flex-row justify-content-center">
          {/* Columns */}
          <div className="col col-xl-50">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control' placeholder='Name' />
          </div>
          <div className="col col-xl-50">
            <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className='form-control' placeholder='Location' />
          </div>
          <div className="col col-xl-80">
            <select 
              value={priceRange} onChange={(e) => setPriceRange(e.target.value)} type="text" className='custom-select pt-1 pb-2 mx-1 border border-grey rounded w-75' placeholder='Location'>
              <option disabled> Price Range</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>
            <button onClick={handleSubmit} type="submit" className='btn btn-primary btn-md w-30'>Add</button>
        </div>
      </form>

    </div>
  )
}

export default AddRestaurant