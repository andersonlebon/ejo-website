import React from 'react';
import { Link } from 'react-router-dom';
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';
import team4 from '../assets/img/team/team-4.jpg';



const Team = () => {
  return ( 
    <section id="team" className="team sections-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>Our Team</h2>
        <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
      </div>

      <div className="row gy-4">

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="member">
            <img src={team1} className="img-fluid" alt=""/>
            <h4>Walter White</h4>
            <span>Web Development</span>
            <div className="social">
              <Link to=""><i className="bi bi-twitter"></i></Link>
              <Link to=""><i className="bi bi-facebook"></i></Link>
              <Link to=""><i className="bi bi-instagram"></i></Link>
              <Link to=""><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>
        
        {/* <!-- End Team Member --> */}

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="member">
            <img src={team2} className="img-fluid" alt=""/>
            <h4>Sarah Jhinson</h4>
            <span>Marketing</span>
            <div className="social">
              <Link to=""><i className="bi bi-twitter"></i></Link>
              <Link to=""><i className="bi bi-facebook"></i></Link>
              <Link to=""><i className="bi bi-instagram"></i></Link>
              <Link to=""><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>
        
        {/* <!-- End Team Member --> */}

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
          <div className="member">
            <img src={team3} className="img-fluid" alt=""/>
            <h4>William Anderson</h4>
            <span>Content</span>
            <div className="social">
              <Link to=""><i className="bi bi-twitter"></i></Link>
              <Link to=""><i className="bi bi-facebook"></i></Link>
              <Link to=""><i className="bi bi-instagram"></i></Link>
              <Link to=""><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>
        
        {/* <!-- End Team Member --> */}

        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
          <div className="member">
            <img src={team4} className="img-fluid" alt=""/>
            <h4>Amanda Jepson</h4>
            <span>Accountant</span>
            <div className="social">
              <Link to=""><i className="bi bi-twitter"></i></Link>
              <Link to=""><i className="bi bi-facebook"></i></Link>
              <Link to=""><i className="bi bi-instagram"></i></Link>
              <Link to=""><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
   );
}
 
export default Team;