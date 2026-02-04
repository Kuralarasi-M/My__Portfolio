
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar  expand="lg" className='navbar-custom'>
      <Container>
       
        <Navbar.Brand as={Link} to="/" className='.navbar-custom .navbar-brand'>Portfolio</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='.navbar-custom .nav-link'>Home</Nav.Link>
            <Nav.Link as={Link} to="/education" className='.navbar-custom .nav-link'>Education</Nav.Link>
            <Nav.Link as={Link} to="/skill" className='.navbar-custom .nav-link'>Skill</Nav.Link>
            <Nav.Link as={Link} to="/project" className='.navbar-custom .nav-link'>Project</Nav.Link>
            <Nav.Link as={Link} to="/intern" className='.navbar-custom .nav-link'>Internship</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='.navbar-custom .nav-link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar