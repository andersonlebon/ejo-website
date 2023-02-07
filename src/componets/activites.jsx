import React from 'react'
import Activity1 from '../assets/img/portfolio/app-1.jpg'
import Activity2 from '../assets/img/portfolio/product-1.jpg'
import Activity3 from '../assets/img/portfolio/branding-1.jpg'
import Activity4 from '../assets/img/portfolio/books-1.jpg'
import Activity5 from '../assets/img/portfolio/app-2.jpg'
import Activity6 from '../assets/img/portfolio/product-2.jpg'
import Activity7 from '../assets/img/portfolio/branding-2.jpg'
import Activity8 from '../assets/img/portfolio/books-2.jpg'
import Activity9 from '../assets/img/portfolio/app-3.jpg'
import Activity10 from '../assets/img/portfolio/product-3.jpg'
import Activity11 from '../assets/img/portfolio/branding-3.jpg'
import Activity12 from '../assets/img/portfolio/books-3.jpg'

import { Link } from 'react-router-dom'

const Activities = ({ more }) => {
  return (
    <section id="portfolio" class="portfolio sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Nos Activites recentes</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </div>

        <div
          class="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {more && (
            <div>
              <ul class="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
              {/* <!-- End Portfolio Filters --> */}
            </div>
          )}

          <div class="row gy-4 portfolio-container">
            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <Link
                  to="/activities/details"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img src={Activity1} class="img-fluid" alt="" />
                </Link>
                <div class="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html" title="More Details">
                      App 1
                    </Link>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <Link
                  to="/activities/details"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img src={Activity2} class="img-fluid" alt="" />
                </Link>
                <div class="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html" title="More Details">
                      Product 1
                    </Link>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <Link
                  to="/activities/details"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                >
                  <img src={Activity3} class="img-fluid" alt="" />
                </Link>
                <div class="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html" title="More Details">
                      Branding 1
                    </Link>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}
            {more && (
              <>
                <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity3} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Books 1
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity1} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          App 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity2} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Product 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity3} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Branding 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}
                <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity3} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Books 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity1} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          App 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity2} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Product 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity3} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Branding 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div class="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      class="glightbox"
                    >
                      <img src={Activity3} class="img-fluid" alt="" />
                    </Link>
                    <div class="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Books 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* <!-- End Portfolio Container --> */}
        </div>

        <Link
          to="/activities"
          class="see-more mt-4"
        >
          See More
        </Link>
      </div>
    </section>
  )
}

export default Activities
