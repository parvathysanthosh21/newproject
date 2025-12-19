import React, { useContext, useEffect, useState } from 'react'
import AddProject from '../Components/AddProject'
import { deleteProjectAPI, getUserProjectAPI } from '../Services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../ContextAPI/ContextShares'
import EditProject from './EditProject'
import { ToastContainer, toast } from 'react-toastify';
function MyProjects() {
    const [allProjects,setAllProjects]= useState([])

      const {addProjectResponse,setAddProjectResponce} = useContext(addProjectResponseContext)
    

  const {editProjectResponce,setEditProjectResponce} = useContext(editProjectResponseContext)

   const getUserProjects= async ()=>{
    const token =sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
        const result = await getUserProjectAPI(reqHeader)
      if (result.status===200) {
        setAllProjects(result.data)
      } else {
        console.log(result);
        
      }
    }
    
    }
    console.log(allProjects);
  useEffect(()=>{
getUserProjects()
  },[addProjectResponse,editProjectResponce])

const handleDeleteProject =async(pid)=>{
  const token = sessionStorage.getItem("token")
  if (token) {
  const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        } 
        try{
    const result = await deleteProjectAPI(pid,reqHeader)
    if(result.status===200){
      getUserProjects()
    }else{
      toast.warning(result.response.data)
    }
  }catch(err){
    console.log(err);
    
  } 
  }
  
}

  return (
    <div className='card shadow p-3 mt-3'>
      <div className='d-flex '>
        <h3>MyProjects</h3>
        <div className="ms-auto"><AddProject /></div>
      </div>
      <div className="mt-4">
        {/* array of user projects : this display as each div  using map it give*/}
       {allProjects.length>0? 
       allProjects.map((project,index)=>(
 <div key={index} className="border d-flex align-items-center rounded p-2">
          <h5>{project?.title}</h5>
          <div className="icon ms-auto d-flex align-items-center">
            <EditProject project={project}/>
            <a className='btn' target='_blank' href={project?.github}><i class="fa-brands fa-github fa-2x"></i></a>
            {/* <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button> */}
            <button className='btn' onClick={()=>handleDeleteProject(project?._id)}><i class="fa-solid fa-trash fa-2x"></i></button>

          </div>
        </div>
       ))
       
        
      :        <div className='text-danger fw-bolder mt-2'>No Projects uploaded yet!!!</div>

      }

      </div>
            <ToastContainer position='top-right' autoClose={2000} theme='colored' />
      
    </div>
    
  )
}

export default MyProjects