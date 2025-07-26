import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <nav className='navbar'>
        <div className='logo'><i class="bi bi-cart4"></i>FreshCart</div>
        <div className='menu-icon' onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} >
          <li><Link className='link' to='/Product'>Product</Link></li>
          <li><Link className='link' to='/Home'>Home</Link></li>
          <li><Link className='link' to='Signup'><i class="bi bi-person-hearts"></i></Link></li>
          <li><Link className='link' to='/Cart'><i class="bi bi-cart3"></i></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header

