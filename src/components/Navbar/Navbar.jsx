import React from 'react'
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <img src={logo} alt="logo" className='logo' />
      
      <div className='Items'>
        <button className='navButton'>Home</button>
        <button className='navButton'>Home</button>
        <button className='navButton'>Home</button>
        <button className='navButton'>Home</button>
      </div>
      <div className='navItems'>
        <button className='navButtonS'>Login</button>
      </div>
      </div>
    </div>
  )
}
export default Navbar