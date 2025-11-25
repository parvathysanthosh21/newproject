import React from 'react'
import Header from '../Components/Header'
import { Row ,Col} from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
function Project() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:'100px'}} className='projects'>
        <h1 className="text-center mb-5 text-primary">All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50 rounded">
              <input type="text" className='form-control' placeholder='Search Products by technologies used' /><i style={{ marginLeft: '-45px', marginTop: '13px' }} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <Row className='mt-5 container-fluid'>
        <Col sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
        </Row>
      </div>
    </div>
  )
}

export default Project