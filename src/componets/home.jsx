
import React, { useEffect } from 'react';
import logo from '../assets/img/log03.png';
import {FaPrayingHands} from 'react-icons/fa';
import { TbPray } from 'react-icons/tb';
import { RiHandHeartLine } from 'react-icons/ri';
 
import About from './about';
import Partners from './partners';
import Services from './services';
import Testimonies from './testimonies';
import Contact from './contact';
import Footer from './footer';
import Team from './team';
import FaqSection from './faq';
import Activities from './activites';
import { Link } from 'react-router-dom';


const Home = () => {
  // add an outside js file to the project
  // use dom to add the script tag to the head]
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "../assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    
  }, []);

  return ( 
    <>
  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="hero ">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Welcome to <span className='ejo'>EjO<span>.</span></span></h2>
          <p>We pray and woship God with our tallents </p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to="#about" className="btn-get-started">Join Us</Link>
            <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></Link>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 m-0">
          <img src={logo} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
        </div>
      </div>
    </div>

    <div className="icon-boxes position-relative ">
      <div className="container position-relative ">
        <div className="row gy-4 mt-">

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><FaPrayingHands/></div>
              <h4 className="title"><Link href="" className="stretched-link">We pray the Lord</Link></h4>
            </div>
          </div>
          {/* <!--End Icon Box --> */}

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><TbPray/></div>
              <h4 className="title"><Link to="" className="stretched-link">We dance for His Glory</Link></h4>
            </div>
          </div>
          {/* <!--End Icon Box --> */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-box">
              <div className="icon"><RiHandHeartLine/></div>
              <h4 className="title"><Link to="" className="stretched-link">We assist ophans</Link></h4>
            </div>
          </div>

          {/* <!--End Icon Box --> */}

          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-geo-alt"></i></div>
              <h4 className="title"><Link to="#1" className="stretched-link"> Here in DRC/Goma</Link></h4>
            </div>
          </div>

          {/* <!--End Icon Box --> */}

        </div>
      </div>
    </div>
  </section>
  <main id="main">
      <About/>
      <Partners/>
      <Services/>
      <Activities more={false} />
      <Testimonies/>
      <Team/>
      <FaqSection/>
      <Contact/>
    </main>
    <Footer/>
    <Link to="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>

  </>
   );
}
 
export default Home;