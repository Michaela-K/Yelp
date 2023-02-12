import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='mb-4 w-100 p-3' style={{backgroundColor: '#eee'}}>
      {/* Form */}
      <form action='w-100'>
        {/* Row */}
        <div className="w-100 form-row d-flex flex-row justify-content-center">
          {/* Columns */}
          <div className="col col-xl-50">
            <input type="text" className='form-control' placeholder='Name' />
          </div>
          <div className="col col-xl-50">
            <input type="text" className='form-control' placeholder='Location' />
          </div>
          <div className="col col-xl-80">
            <select type="text" className='custom-select w-50' placeholder='Location'>
              <option disabled> Price Range</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>
            <button className='btn btn-primary btn-md w-30'>Add</button>
        </div>
      </form>

    </div>
  )
}

export default AddRestaurant