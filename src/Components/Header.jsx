import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header({insideDashboard}) {
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
  <div className="btn btn-linkms-auto text-light  fs-5">Logout <i class="fa-solid fa-right-from-bracket"></i></div>
}             </Container>
      </Navbar>

    </>
  )
}

export default Header