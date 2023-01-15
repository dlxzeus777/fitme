import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="" variant="" className='filter'>
      <Container>
        <Navbar.Brand href="#home" className='header-logo'><span className='purple'>Fit</span>Me</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='link'>Home</Nav.Link>
            <Nav.Link href="#trainers" className='link'>Trainers</Nav.Link>
            <Nav.Link href="#programs" className='link'>Programs</Nav.Link>
            <Nav.Link href="#memberships" className='link'>Memberships</Nav.Link>
            <Nav.Link href="#testimonials" className='link'>Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header