import React from 'react'
import { Row, Col } from 'react-bootstrap'
import titleimg from '../assets/title.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    {/* landing section */}
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }} className='container-fluid rounded'>
        <Row className='p-5 align-items-center'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '80px' }} className='fw-bolder text-primary fs-1 mb-5'><i className="fa-brands fa-stack-overflow fa-bounce p-2"></i> Project-Fair</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt eveniet, mollitia doloremque alias nostrum quae dolor dolore? Saepe autem sint nesciunt cum totam perspiciatis laudantium maiores ea aut rerum.</p>
          <Link to={'/login'} className='btn btn-primary'>Start To Explore <i class="fa-solid fa-right-long fa-bea ms-2"></i></Link>
          </Col>
         <Col sm={12} md={6}>
          <img style={{marginTop:'80px'}} className='w-100' src={titleimg} alt="titleimg" />
          </Col>
        </Row>
      </div>

      {/* all projects */}
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
       <marquee scrollAmount={20}>
          <Row>
            <Col sm={12} md={6} lg={4}>
            {/* create a component for card name : ProjectCard */}
            <ProjectCard/>
            </Col>
              <Col sm={12} md={6} lg={4}>
            {/* create a component for card name : ProjectCard */}
            <ProjectCard/>
            </Col>
              <Col sm={12} md={6} lg={4}>
            {/* create a component for card name : ProjectCard */}
            <ProjectCard/>
            </Col>
          </Row>
       </marquee>
         <div className="text-center mt-5 mb-5"> <Link to={'/project'} className='text-primary fw-bolder'>View More Projects</Link></div>

      </div>
    </>
  )
}

export default Home