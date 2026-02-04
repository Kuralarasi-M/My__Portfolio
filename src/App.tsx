
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Education from './Education'
import Project from './Project'
import Skill from './Skill'
import NavBar from './NavBar'
import Intern from './Internship'
import Contact from './Contact'

function App() {
 

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/project" element={<Project />}></Route>
         <Route path="/skill" element={<Skill />}></Route>
        <Route path="/intern" element={<Intern />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      
    </>
  )
}

export default App
