import React from 'react';
import { Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {

    return (
      <div className='navbar-holder'>
        <h1>Musire Empire</h1>
        <nav className='navbar'>
          <Link className='navbar-link' to="/adminPage" >Admin Panel</Link>
          <Link className='navbar-link' to="/modPage" >Mod Panel</Link>
          <Link className='navbar-link' to="/profilePage">Profile</Link>
          <Link className='navbar-link' to="/" >Logout</Link>
        </nav>
      </div>
    );
  }

export default Navbar;