import React,{useState} from 'react'


import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
    
  };

  return (<>
    <header id="header" className="fixed-top d-flex align-items-center">
    {/* <div className="container d-flex align-items-center justify-content-between">
      
    
    <a href="/" className="logo"><img src="port_logo-transformed.png" alt="" className="img-fluid"/></a>

      {/* <nav id="navbar" className="navbar">
        
        <ul>
          <li><p className="nav-link scrollto active"><Link to="/#" style={{textDecoration:"none"}} >Home</Link></p></li>
          <li><p className="nav-link scrollto" ><Link to="/#about" style={{textDecoration:"none"}} >About</Link></p></li>
          <li><p className="nav-link scrollto" ><Link to="/#skills" style={{textDecoration:"none"}} >Skills</Link></p></li>
          <li><p className="nav-link scrollto " ><Link to="/#portfolio" style={{textDecoration:"none"}} >Portfolio</Link></p></li>
          <li><p className="nav-link scrollto" ><Link to="/#contact" style={{textDecoration:"none"}} >Contact</Link></p></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      
      </nav> 

    </div> */}

<nav class="nav container">
        <a href="#" class="nav__logo noSelect" style={{fontSize:'larger'}}>Neeraj Shilwant</a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="#home" class="nav__link noSelect active-link">
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li class="nav__item">
              <a href="#about" class="nav__link noSelect">
                <i class="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li class="nav__item">
              <a href="#skills" class="nav__link noSelect">
                <i class="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li class="nav__item">
              <a href="#services" class="nav__link noSelect">
                <i class="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li class="nav__item">
              <a href="#portfolio" class="nav__link noSelect">
                <i class="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link noSelect">
                <i class="uil uil-message nav__icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close noSelect" id="nav-close"></i>
        </div>

        <div class="nav__btns">
        
          <i  class={isDarkTheme ? "uil uil-sun change-theme":"uil uil-moon change-theme"} onClick={toggleTheme}   id="theme-button"></i>

          {/* <div class="nav__toggle noSelect" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div> */}
        </div>
      </nav>
  </header>

  
  
</>
  )
}
