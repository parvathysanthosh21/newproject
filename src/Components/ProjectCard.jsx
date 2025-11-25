import React, { useState } from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
import cardImg from '../assets/plant store.png'
function ProjectCard() {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>Plant Store</Card.Title>
      </Card.Body>
    </Card>

    {/* modal */}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img style={{height:'200px'}} className='img-fluid' src={cardImg} alt="project" />
                </Col>
                <Col md={6}>
                <h2>Project Title</h2>
                <p>Project Overview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas veniam quidem </p>
                <p>Language Used : <span className='fw-bolder'>HTML, CSS, React</span></p>
                
                </Col>
            </Row>
            <div className='mt-3'>
                    <a href="https://github.com/parvathysanthosh21/pronia" target='_blank' className='me-3 btn'><i class="fa-brands fa-github text-dark fa-2x "></i></a>
                    <a href="https://pronia.netlify.app/" target='_blank' className='me-3 btn'><i class="fa-solid fa-link fa-2x"></i></a>

                </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard