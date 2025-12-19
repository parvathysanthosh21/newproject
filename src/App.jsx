import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Footer from "./Components/Footer"
import Auth from "./Components/Auth"
import { useContext } from "react"
import { tokenAuthenticationContext } from "./ContextAPI/TokenAuth"

function App() {
    const {isAuthorised,setIsAuthorised} = useContext(tokenAuthenticationContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/register" element={<Auth register/>}/>
        <Route path="/dashboard" element={isAuthorised?<Dashboard/>:<Home/>}/>
        <Route path="/project" element={isAuthorised?<Project/>:<Home/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
