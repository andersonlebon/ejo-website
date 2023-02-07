import React from 'react';
import logo from '../assets/img/logo.png';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <Link to="#header" class="logo d-flex align-items-center">
            <img src={logo} alt="" />
          </Link>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links-footer d-flex mt-4">
            <Link to="#" class=""><FaWhatsapp/></Link>
            <Link to="#" class="facebook"><FaFacebookF/></Link>
            <Link to="#" class="instagram"><FaInstagram/></Link>
            <Link to="#" class="linkedin"><FaLinkedinIn/></Link>
            <Link to="#" class="youtube"><FaYoutube/></Link>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="#hero">Home</Link></li>
            <li><Link to="#about">About us</Link></li>
            <li><Link to="#portfolio">Services</Link></li>
            <li><Link to="#">Terms of service</Link></li>
            <li><Link to="#">Privacy policy</Link></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="#">Web Design</Link></li>
            <li><Link to="#">Web Development</Link></li>
            <li><Link to="#">Product Management</Link></li>
            <li><Link to="#">Marketing</Link></li>
            <li><Link to="#">Graphic Design</Link></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br/>
            New York, NY 535022<br/>
            United States <br/><br/>
            <strong>Phone:</strong> +1 5589 55488 55<br/>
            <strong>Email:</strong> info@example.com<br/>
          </p>
        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; 2023 Copyright . All Rights Reserved
      </div>
      <div class="credits">
        Designed by <Link to="https://caleband.netlify.app/">{"<Caleb/> "}</Link> <br /> Using <Link to="https://bootstrapmade.com/">Bootstrap</Link>
      </div>
    </div>

  </footer>
   );
}
 
export default Footer;