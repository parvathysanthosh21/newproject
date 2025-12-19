import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import titleimg from '../assets/title.png'
import ProjectCard from '../Components/ProjectCard'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getHomeProjectsAPI } from '../Services/allAPI'

function Home() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLiggedIn] = useState(false)
  const [allProjects,setAllProjects]= useState([])
  console.log(allProjects);

  const getHomeProject= async ()=>{
    const result = await getHomeProjectsAPI()
    if (result.status===200) {
      setAllProjects(result.data)
    } else {
      console.log(result);
      
    }
  }

  useEffect(() => {
    getHomeProject()
    if (sessionStorage.getItem("token")) {
      setIsLiggedIn(true)
    } else {
      setIsLiggedIn(false)
    }
  }, [])

  const handleProjectPage =()=>{
    if (sessionStorage.getItem("token")) {
          navigate('/project')

    } else {
      toast.warning("Please Login To Explore Our Projects")
    }
  }
  return (
    <>
      {/* landing section */}
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }} className='container-fluid rounded'>
        <Row className='p-5 align-items-center'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '80px' }} className='fw-bolder text-primary fs-1 mb-5'><i className="fa-brands fa-stack-overflow fa-bounce p-2"></i> Project-Fair</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt eveniet, mollitia doloremque alias nostrum quae dolor dolore? Saepe autem sint nesciunt cum totam perspiciatis laudantium maiores ea aut rerum.</p>

            {
              isLoggedIn ?
                <Link to={'/dashboard'} className='btn btn-primary'>Manage Your Products <i class="fa-solid fa-right-long fa-bea ms-2"></i></Link>
                :
                <Link to={'/login'} className='btn btn-primary'>Start To Explore <i class="fa-solid fa-right-long fa-bea ms-2"></i></Link>
            }
          </Col>
          <Col sm={12} md={6}>
            <img style={{ marginTop: '80px' }} className='w-100' src={titleimg} alt="titleimg" />
          </Col>
        </Row>
      </div>

      {/* all projects */}
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee scrollAmount={20}>
          <Row>
            {allProjects.length>0? allProjects.map((project,index)=>(
 <Col sm={12} md={6} lg={4} key={index}>
              {/* create a component for card name : ProjectCard */}
              <ProjectCard project={project}/>
            </Col>
            )):null}
           
            
          </Row>
        </marquee>
        <div className="text-center mt-5 mb-5"> <button onClick={handleProjectPage}  className='btn btn-link'>View More Projects</button></div>

      </div>
            <ToastContainer position='top-right' autoClose={2000} theme='colored' />
      
    </>
  )
}

export default Home