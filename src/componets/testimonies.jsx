import React from 'react';
import testimoni1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimoni2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimoni3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimoni4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimoni5 from '../assets/img/testimonials/testimonials-5.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';




const Testimonies = () => {
  return (  
    
    // <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" className="testimonials sections-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header pb-2">
          <h2>Testimonials</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>

        <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
          <Swiper 
            modules={[Pagination, Scrollbar, A11y]}
            slidesPerView={3}
              pagination={{ clickable: true }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },

              }}
          >

            <SwiperSlide>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src={testimoni1} className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
            {/* <!-- End testimonial item --> */}

            <SwiperSlide>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src={testimoni2} className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
            {/* <!-- End testimonial item --> */}

            <SwiperSlide>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src={testimoni3} className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
            {/* <!-- End testimonial item --> */}


            <SwiperSlide>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src={testimoni4} className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- End testimonial item --> */}

            <SwiperSlide>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img src={testimoni5} className="testimonial-img flex-shrink-0" alt=""/>
                    <div>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- End testimonial item --> */}

          </Swiper>
        </div>

      </div>
    </section>
  );
}
 
export default Testimonies;