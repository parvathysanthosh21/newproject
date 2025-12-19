import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import MyProfile from '../Components/MyProfile'
function Dashboard() {
  const [username, setUsername] = useState("")
  useEffect(() => {
if (sessionStorage.getItem("username")) {
  setUsername(sessionStorage.getItem("username"))
} else {
  setUsername("")
}
  }, [])
  return (
    <div>
      <Header insideDashboard />
      <Row style={{ marginTop: '100px' }} className='container-fluid'>
        {/* my project */}
        <Col sm={12} md={8}>
          <h2>Welcome <span className='text-primary fw-bolder'>{username?.split(" ")[0]}</span> </h2>
          <MyProjects />
        </Col>
        {/* myprofile */}
        <Col sm={12} md={4}>
          <MyProfile />
        </Col>
      </Row>
    </div >
  )
}

export default Dashboard