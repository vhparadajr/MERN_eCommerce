import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/cart"><FaShoppingCart /> Cart</NavLink>
              <NavLink href="/login"><FaUser /> Sign In</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>  
      </Navbar>
    </header>
  )
}

export default Header