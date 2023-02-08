import React from 'react'
import PageHeader from './pageHeader'
import app1 from '../../assets/img/portfolio/app-1.jpg'
import app2 from '../../assets/img/portfolio/app-2.jpg'
import app3 from '../../assets/img/portfolio/app-3.jpg'
import product1 from '../../assets/img/portfolio/product-1.jpg'
import product2 from '../../assets/img/portfolio/product-2.jpg'
import branding1 from '../../assets/img/portfolio/branding-1.jpg'
import branding2 from '../../assets/img/portfolio/branding-2.jpg'
import books1 from '../../assets/img/portfolio/books-1.jpg'
import books2 from '../../assets/img/portfolio/books-2.jpg'

import ejo1 from '../../assets/img/ejo/ejo1.jpg'
import ejo2 from '../../assets/img/ejo/ejo2.jpg'
import ejo3 from '../../assets/img/ejo/ejo3.jpg'
import ejo4 from '../../assets/img/ejo/ejo4.jpg'
import ejo5 from '../../assets/img/ejo/ejo5.jpg'
import ejo6 from '../../assets/img/ejo/ejo6.jpg'
import ejo7 from '../../assets/img/ejo/ejo7.jpg'
import ejo8 from '../../assets/img/ejo/ejo8.jpg'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper';


import testimonials1 from '../../assets/img/testimonials/testimonials-1.jpg'



const Service = () => {
  return (
    <>
      <PageHeader
        title="Activity Details"
        description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />

<section id="portfolio-details" className="portfolio-details sections-bg">
      <div className="container" data-aos="fade-up">

        <div className="position-relative h-100">
          <div className="slides-1 portfolio-details-slider swiper pb-5">
            <Swiper className="swiper-wrapper align-items-center"
            modules={[Pagination, Scrollbar, A11y, Navigation]}
            spaceBetween={40}
            navigation
            slidesPerView={2}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

              <SwiperSlide className="swiper-slide">
                <img src={ejo1} alt=""/>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ejo2} alt=""/>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ejo3} alt=""/>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ejo4} alt=""/>
              </SwiperSlide>

            </Swiper>
            <div className="swiper-pagination"></div>
          </div>

        </div>

        <div className="row justify-content-between gy-4 mt-4">

          <div className="col-lg-8">
            <div className="portfolio-description">
              <h2>This is an example of an Activity detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
              <p>
                Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
              </p>

              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <div>
                  <img src={testimonials1} className="testimonial-img" alt=""/>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>

              <p>
                Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
              </p>

              <p>
                Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
              </p>

            </div>
          </div>

          <div className="col-lg-3">
            <div className="portfolio-info">
              <h3>Acivity information</h3>
              <ul>
                <li><strong>Category</strong> <span>Street Danse</span></li>
                <li><strong>Lieux</strong> <span>Mosque KinMarchet</span></li>
                <li><strong>Date</strong> <span>01 March, 2020</span></li>
                <li><strong>Youtube URL</strong> <a href="#">www.example.com</a></li>
                <li><a href="#" className="btn-visit align-self-start">Visit Website</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Service
