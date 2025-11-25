import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Footer from "./Components/Footer"
import Auth from "./Components/Auth"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/register" element={<Auth register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/project" element={<Project/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
