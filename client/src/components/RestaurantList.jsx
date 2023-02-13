import React, { useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'

const RestaurantList = () => {
  //to get data to mount as soon as you open is by using useEffect, This runs when the component mounts and re renders, unless you put empty []
  useEffect(() => {
    //this use effect hook DOES NOT LIKE IT when we return anything, thats why we need to put it in this fetchData function and call it. This function returns, no the useEffect
    const fetchData = async () => {
    try{
      const response =  await RestaurantFinder.get("/"); // here its just a slash because it goes to the baseURL in the api file
    console.log(response);  //this use effect hook does not like it when we return anything
    }catch (err){};
  };
    fetchData();
  }, [])

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
    <tr>
      <th scope="row">Fish and Chips</th>
      <td>New Yoek</td>
      <td>$</td>
      <td>***</td>
      <td><button className='btn btn-warning'>Update</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">Burger Kring</th>
      <td>Ohio</td>
      <td>$$</td>
      <td>**</td>
      <td><button className='btn btn-warning'>Update</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">Kull's Burgers</th>
      <td>Cape Town</td>
      <td>$$$</td>
      <td>***</td>
      <td><button className='btn btn-warning'>Update</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default RestaurantList