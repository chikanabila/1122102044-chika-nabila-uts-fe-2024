import React, {useState, useEffect} from 'react';
import { Navbar, Nav, Form, NavDropdown} from 'react-bootstrap';

const NavbarComp = () => {
  const[changeColor, setChangeColor] = useState(false);
  
  const changeBackgroundColor = () => {
    if (window.scrollY > 200) {
      setChangeColor(true);
    } else{
      setChangeColor(false);
    }
  };

  useEffect(() =>{
    changeBackgroundColor();
    window.addEventListener("scroll",changeBackgroundColor);
  })

  return (
    <div className="fixed-top">
     <Navbar expand="lg" variant="dark" className={changeColor ? "color-active" : ""}>
        <Navbar.Brand href="#home" className='fw-bold fs-4'>.Abing's</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>   
            <Nav.Link href="#gallery" className='mx-2'>Gallery</Nav.Link>         
            <Nav.Link href="#services" className='mx-2'>Service</Nav.Link>
            <Nav.Link href="#faq" className='mx-2'>FAQ</Nav.Link>
            <Nav.Link href="#tabel" className='mx-2'>Tabel</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/register"> Register </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
 
export default NavbarComp;