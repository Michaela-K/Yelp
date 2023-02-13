import React from 'react'

const RestaurantList = () => {
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