import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className = "locus__navbar">
      <div className = "locus__navbar-links">
        <div className = "locus__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className = "locus__navbar-links_container">
          <p><a href = "#home">Home</a></p>
          <p><a href = "#learn">Learn</a></p>
          <p><a href = "#work_with_us">Work With Us</a></p>
          <p><a href = "#why">Why</a></p>

        </div>
      </div>
    </div>
  )
}

export default Navbar