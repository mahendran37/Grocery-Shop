import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.css'
import { CartContext } from './CartProvider';
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem, wishlist } = useContext(CartContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          {/* Brand / Logo */}
          <Navbar.Brand href="#home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="Logo"
            />
            ShopGrids
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li><Link className='nav-link' to='/Home'>Home</Link></li>
              <li><Link className='nav-link' to='/Product'>Product</Link></li>
              <li><Link className='nav-link' to='Signup'><i className="bi bi-person-fill-add"></i></Link></li>
              <li><Link className='nav-link' to='/Contact'>Contact</Link></li>
              <li><Link className='nav-link' to='Table'></Link></li>
              <li><Link className='nav-link' to='Homes'></Link></li>

              {/* Dropdown */}
              <NavDropdown title="All Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fruitss</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Vegetables</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Groceries</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Right side */}
            <Nav>
              <li><Link className='nav-link' to='/Cart'><i className="bi bi-cart3"></i><span
                style={{
                  background: "gray", borderRadius: "90%", padding: "2px 6px", marginLeft: "5px", fontSize: "14px", color: "white",
                }}
              >{cartItem.length}</span></Link></li>

              <li><Link className='nav-link' to='/Wishlist'><i className="bi bi-heart-fill"></i><span style={{
                background: "red", borderRadius: "90%", padding: "2px 6px", marginLeft: "5px", fontSize: "14px", color: "white",
              }}>{wishlist.length}</span></Link></li>

              <Nav.Link href="#About">Shipping</Nav.Link>
              <Nav.Link href="#exclusive">Exclusive</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;