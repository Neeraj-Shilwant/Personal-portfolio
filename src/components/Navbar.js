import React from 'react'
import './Navbar.css'
import './css/vendor/animate.css/animate.min.css'
import './css/vendor/bootstrap/css/bootstrap.min.css'
import './css/vendor/bootstrap-icons/bootstrap-icons.css'
import './css/vendor/boxicons/css/boxicons.min.css'
import './css/vendor/glightbox/css/glightbox.min.css'
import './css/vendor/swiper/swiper-bundle.min.css'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  return (<>
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      
    
    <a href="/" className="logo"><img src="port_logo-transformed.png" alt="" className="img-fluid"/></a>

      <nav id="navbar" className="navbar">
        
        <ul>
          <li><p className="nav-link scrollto active"><Link to="/#" style={{textDecoration:"none"}} >Home</Link></p></li>
          <li><p className="nav-link scrollto" ><Link to="/#about" style={{textDecoration:"none"}} >About</Link></p></li>
          <li><p className="nav-link scrollto" ><Link to="/#skills" style={{textDecoration:"none"}} >Skills</Link></p></li>
          <li><p className="nav-link scrollto " ><Link to="/#portfolio" style={{textDecoration:"none"}} >Portfolio</Link></p></li>
          <li><p className="nav-link scrollto" ><Link to="/#contact" style={{textDecoration:"none"}} >Contact</Link></p></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      
      </nav>

    </div>
  </header>

  
  
</>
  )
}
