import React from 'react'

import "./navbar.css"
import { useRef, useState } from 'react'

const Navbar = () => {

  
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ZENNVOY.com</span>
        <div className="navItems">
          <div className="itemList">Reserve stays</div>
          <div className="itemList">Book flight</div>
          <div className="itemList">Get ride</div>
          <div className="itemList">Destination</div>
          <div className="itemList">My trips</div>
          <div className="itemList">Support</div>
         
          
          <div className="itemList">
          <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>Currency</span>
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="/messages">USD</a></li>
          <li><a href="/trips">EURO</a></li>
          <li><a href="/saved">ASD</a></li>
        </ul>
      </nav>
    </div>
        </div>
        <button className="navButton">Register</button>
          <button className="navButton">Login</button>
      </div>
     

    </div>
    </div>

  )
}

export default Navbar