import React, { useContext } from 'react'
import {Container, Navbar} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { tokenAuthenticationContext } from '../ContextAPI/TokenAuth'
function Header({insideDashboard}) {
  const navigate=useNavigate()
    const {isAuthorised,setIsAuthorised} = useContext(tokenAuthenticationContext)

  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    setIsAuthorised(false)
    navigate('/')
  }

  return (

    <>
   <Navbar style={{ zIndex:"1"}} className="position-fixed top-0 w-100 bg-primary " >
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              <i className="fa-brands fa-stack-overflow fa-bounce"></i>  Project Fair
            </Link>
          </Navbar.Brand>
{insideDashboard &&
  <div onClick={handleLogout} className="btn btn-linkms-auto text-light  fs-5">Logout <i class="fa-solid fa-right-from-bracket"></i>
  </div>
}             </Container>
      </Navbar>

    </>
  )
}

export default Header