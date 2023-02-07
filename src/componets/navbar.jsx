import React from 'react';
import logo from '../assets/img/log03.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="index.html" className="logo d-flex align-items-center">
      <img src={logo} alt=""/> 
      
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="#team">Team</Link></li>
          <li><Link to="testimonials">Testimonies</Link></li>
          <li className="dropdown"><Link to="#"><span>Ejo Takos</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="#">Menu</Link></li>
              <li className="dropdown"><Link to="#"><span>Takos</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="#">Les galettes bretonnes</Link></li>
                  <li><Link to="#">Le steak-tartare</Link></li>
                </ul>
              </li>
              <li><Link to="#">Chips</Link></li>
              <li><Link to="#">Snaks</Link></li>
              <li><Link to="#">...</Link></li>
            </ul>
          </li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
      {/* <!-- .navbar --> */}


      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
   );
}
 
export default NavBar;