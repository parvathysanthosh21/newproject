import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import { updateUserProfileAPI } from '../Services/allAPI';

function MyProfile() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "", password: "", email: "", github: "", linkedIn: "", profileImage: ""
  })

  const [existingImage, setExistingImage] = useState("")
  const [preview, setPreview] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("userDetails")) {
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))

      setUserData({ ...userData, username: userDetails.username, password: userDetails.password, email: userDetails.email, github: userDetails.github, linkedIn: userDetails.linkedIn })
      setExistingImage(userDetails.profile)
    }
  }, [open])

  useEffect(() => {
    if (userData.profileImage) {
      setPreview(URL.createObjectURL(userData.profileImage))
    } else {
      setPreview("")
    }
  }, [userData.profileImage])
  console.log(userData);

  const handleProfileUpdate = async() => {
    const { username, email, password, github, linkedIn, profileImage } = userData
    if (!github || !linkedIn) {
      toast.info("Please Fill The Form Completely")
    } else {
      // api call
      const reqBody = new FormData()
      reqBody.append("username", username)
            reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedIn)
      preview ? reqBody.append("profileImage", profileImage) : reqBody.append("profileImage", existingImage)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" :"application/json",
          "Authorization": `Bearer ${token}`
        }

        // api call

        try {
          const result = await updateUserProfileAPI(reqBody,reqHeader)
          if (result.status==200) {
            setOpen(!open)
            sessionStorage.setItem("userDetails",JSON.stringify(result.data))
          }else{
            console.log(result);
            
          }
        } catch (err) {
          console.log(err);
          
        }

      }
    }
  }


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
            <input style={{ display: 'none' }} type="file" onChange={e => setUserData({ ...userData, profileImage: e.target.files[0] })} />
            {existingImage == "" ? 
            
            <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/219/219969.png"} alt="upload picture" />

              :

              <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="upload image" />
            }
          </label>

          <div className="mt-3">
            <input type="text" placeholder='GitHub Link' className='form-control' value={userData.github} onChange={e => setUserData({ ...userData, github: e.target.value })} />
          </div>
          <div className="mt-3">
            <input type="text" placeholder='LinkedIn Link' className='form-control' value={userData.linkedIn} onChange={e => setUserData({ ...userData, linkedIn: e.target.value })} />
          </div>
          <div className="mt-3 text-center d-grid">
            <button className="btn btn-primary " onClick={handleProfileUpdate}>Update</button>
          </div>
        </div>
      </Collapse>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />

    </div>
  )
}

export default MyProfile