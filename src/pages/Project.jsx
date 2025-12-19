import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row ,Col} from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { getAllProjectsAPI } from '../Services/allAPI'
function Project() {
  const [searchKey,setSearchkey] =useState("")
  const [allProjects,setAllProjects]= useState([])
 const getAllProjects= async ()=>{
  const token =sessionStorage.getItem("token")
  if (token) {
    const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      const result = await getAllProjectsAPI(searchKey, reqHeader)
    if (result.status===200) {
      setAllProjects(result.data)
    } else {
      console.log(result);
      
    }
  }
  
  }
  console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  return (
    <div>
      <Header/>
      <div style={{marginTop:'100px'}} className='projects'>
        <h1 className="text-center mb-5 text-primary">All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50 rounded">
              <input  onChange={e=>setSearchkey(e.target.value)} type="text" className='form-control' placeholder='Search Products by technologies used' /><i style={{ marginLeft: '-45px', marginTop: '13px' }} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <Row className='mt-5 container-fluid'>

        { allProjects?.length>0? allProjects.map((project,index)=>(
           <Col key={index} sm={12} md={6} lg={4}>
        <ProjectCard project={project}/>
        </Col>
        )):
         <div className='text-danger fw-bolder fs-4'>
Nothing to display
         </div>
        }
        </Row>
      </div>
    </div>
  )
}

export default Project