import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
function Auth({ register }) {
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  const navigate = useNavigate()
  const isRegisterForm = register ? true : false
  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.info("Please Fill The Form Completely")
    } else {
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status === 200) {
          toast.success(`${result.data.username} has  registered succesfully`)
          setUserData({
            username: "", email: "", password: ""

          })
          setTimeout(() => {
            navigate('/login')

          },3000)
        } else {
          toast.warning(result.response.data)
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }


    }
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userData
    if (!email || !password) {
      toast.info("Please Fill The form completely")
    } else {
      const result = await loginAPI(userData)
      if (result.status === 200) {
        toast.success(`${result.data.username} has registerd successfully!!!`)
setUserData({
          email:"",password:""
        })
        navigate('/')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }
  }
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='w-75 container'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}> <i class="fa-solid fa-arrow-left"></i> Back To Home</Link>
        <div className="card shadow p-5 bg-primary">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-login-illustration-download-in-svg-png-gif-file-formats--access-sign-password-onboarding-screens-pack-business-illustrations-1539388.png" alt="auth pic" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 style={{ fontSize: '80px' }} className='fw-bolder text-light fs-1 mt-2'><i className="fa-brands fa-stack-overflow fa-bounce p-2"></i> Project-Fair</h1>
                {/* signup/signin */}
                <h5 className='fw-bolder pb-3 text-light'>
                  {
                    isRegisterForm ? 'Sign up to your Account' : 'Sign in to your Account'
                  }
                </h5>
                <Form className='text-light w-100'>
                  {
                    isRegisterForm &&
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} />
                    </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email ID" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPswd">
                    <Form.Control type="passord" placeholder="Enter Password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} />
                  </Form.Group>
                  {
                    isRegisterForm ?
                      <div>
                        <button onClick={handleRegister} className="btn btn-light mb-2">Register</button>
                        <p>Already have an Account? Click Here To <Link style={{ textDecoration: 'none', color: 'red', fontWeight: 'bolder' }} to={'/login'}>Login</Link> </p>

                      </div> :
                      <div>
                        <button onClick={handleLogin} className="btn btn-light mb-2">Login</button>
                        <p>New User? Click Here To <Link style={{ textDecoration: 'none', color: 'red', fontWeight: 'bolder' }} to={'/register'}>Register</Link> </p>

                      </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </div>
  )
}

export default Auth