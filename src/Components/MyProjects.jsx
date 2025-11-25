import React from 'react'
import AddProject from '../Components/AddProject'
function MyProjects() {
  return (
    <div className='card shadow p-3 mt-3'>
      <div className='d-flex '>
        <h3>MyProjects</h3>
        <div className="ms-auto"><AddProject /></div>
      </div>
      <div className="mt-4">
        {/* array of user projects : this display as each div  using map it give*/}
        <div className="border d-flex align-items-center rounded p-2">
          <h5>Project Title</h5>
          <div className="icon ms-auto">
            <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
            <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
            <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>

          </div>
        </div>
        <p className='text-danger fw-bolder mt-2'>No Projects uploaded yet!!!</p>

      </div>
    </div>
  )
}

export default MyProjects