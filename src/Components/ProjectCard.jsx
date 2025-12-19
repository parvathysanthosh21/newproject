import React, { useState } from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
import cardImg from '../assets/plant store.png'
import { BASE_URL } from '../Services/baseurl';
function ProjectCard({project}) {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    {project&&
      <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={`${BASE_URL}/uploads/${project?.projectImage}`} />
      <Card.Body>
        <Card.Title>{project?.title}</Card.Title>
      </Card.Body>
    </Card>
    }

    {/* modal */}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img style={{height:'200px'}} className='img-fluid' src={`${BASE_URL}/uploads/${project?.projectImage}`}  alt="project" />
                </Col>
                <Col md={6}>
                <h2>{project?.title}</h2>
                <p>{project?.overview} </p>
                <p>Language Used : <span className='fw-bolder text-danger'>{project?.languages}</span></p>
                
                </Col>
            </Row>
            <div className='mt-3'>
                    <a href={project?.github} target='_blank' className='me-3 btn'><i class="fa-brands fa-github text-dark fa-2x "></i></a>
                    <a href={project?.website} target='_blank' className='me-3 btn'><i class="fa-solid fa-link fa-2x"></i></a>

                </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard