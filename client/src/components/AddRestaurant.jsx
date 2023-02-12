import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='mb-4'>
      {/* Form */}
      <form action=''>
        {/* Row */}
        <div className="form-row d-flex flex-row justify-content-center">
          {/* Columns */}
          <div className="col col-xl-auto">
            <input type="text" className='form-control' placeholder='Name' />
          </div>
          <div className="col col-xl-auto">
            <input type="text" className='form-control' placeholder='Location' />
          </div>
          <div className="col col-lg-auto">
            <select type="text" className='custom-select' placeholder='Location'>
              <option disabled> Price Range</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>
            <button className='btn btn-primary btn-md'>Add</button>
        </div>
      </form>

    </div>
  )
}

export default AddRestaurant