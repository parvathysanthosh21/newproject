import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
 <div style={{width:'100%',height:'300px',color:'black'}} className='d-flex flex-column justify-content-center align-items-center'>
       <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap" >
       <div className="website" style={{width:'400px'}}> 
         <h4 style={{color:'black'}}><i className="fa-solid fa-cloud "></i>{' '}Project</h4>
 <h6 style={{color:'black'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
 <h6 style={{color:'black'}}>Code licensed MIT, docs CC BY 3.0.</h6>
 <p style={{color:'black'}}>Currently v5.3.6.</p>    
     </div>
       <div className="links d-flex flex-column">
         <h4 style={{color:'black'}}>Links</h4>
         <Link to={'/project'}style={{textDecoration:'none',color:'black'}}>Project</Link>
         <Link to={'/'}style={{textDecoration:'none',color:'black'}}>Home</Link>
         <Link to={'/dashboard'}style={{textDecoration:'none',color:'black'}}>Dashboard</Link>
 
       </div>
       <div className="guide d-flex flex-column">
         <h4 style={{color:'black'}}>Guides</h4>
                 <Link to={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'black'}}>React</Link>
         <Link to={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'black'}}>React Bootstrap</Link>
         <Link to={'https://getbootstrap.com/'}style={{textDecoration:'none',color:'black'}}>Routing</Link>
 
 
       </div>
       <div className="contact">
         <div className="sub d-flex">
           <input type="text " className='form-control' placeholder='Enter Your E-mail' />
           <button className='btn btn-dark ms-3 w-75'>Subscribe</button>
         </div>
         <div className="icons fs-3 d-flex justify-content-evenly mt-3">
         <Link to={'/'}style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-instagram"></i></Link>
         <Link to={'/home'}style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-facebook"></i></Link>
         <Link to={'/watchhistory'}style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-twitter"></i></Link>
         <Link to={'/watchhistory'}style={{textDecoration:'none',color:'black'}}><i class="fa-solid fa-envelope"></i></Link>
 
 
         </div>
       </div>
       </div>
 <p style={{color:'black'}}>© 2023 Copyright: Projrct.com Build with react </p>
     </div>
  )
}

export default Footer