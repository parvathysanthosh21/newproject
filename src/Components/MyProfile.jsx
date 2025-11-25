import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function MyProfile() {
   const [open, setOpen] = useState(false);
  return (
    <div className=' shadow p-5'>
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className="btn btn-outline-primary"><i class="fa-solid fa-angle-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className="row shadow  p-5 justify-content-center mt-3">
          {/* upload picture */}
          <label className='text-center'>
            <input style={{display:'none'}} type="file" />
            <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="upload picture" />
          </label>
          <div className="mt-3">
            <input type="text" placeholder='GitHub Link' className='form-control'/>
          </div>
          <div className="mt-3">
            <input type="text" placeholder='LinkedIn Link' className='form-control'/>
          </div>
          <div className="mt-3 text-center d-grid">
            <button className="btn btn-primary ">Update</button>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default MyProfile