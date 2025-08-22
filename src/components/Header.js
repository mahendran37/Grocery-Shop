import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.css'
import { CartContext } from './CartProvider';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cartItem,wishlist} = useContext(CartContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <nav className='navbar'>
        <div className='logo'><i className="bi bi-cart4"></i>FreshCart</div>
        <div className='menu-icon' onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} >
          <li><Link className='link' to='/Home'>Home</Link></li>
          <li><Link className='link' to='/Product'>Product</Link></li>
          <li><Link className='link' to='Signup'><i className="bi bi-person-fill-add"></i></Link></li>
            
          <li><Link className='link' to='/Cart'><i className="bi bi-cart3"></i><span
          style={{
            background:"gray", borderRadius:"90%",padding:"2px 6px",marginLeft:"5px",fontSize:"14px",color:"white",
          }}
          >{cartItem.length}</span></Link></li>

          <li><Link className='link' to='/Wishlist'><i class="bi bi-heart-fill"></i><span style={{
            background:"red", borderRadius:"90%",padding:"2px 6px",marginLeft:"5px",fontSize:"14px",color:"white",
          }}>{wishlist.length}</span></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header;

