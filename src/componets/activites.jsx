import React from 'react'
import Activity1 from '../assets/img/portfolio/app-1.jpg'
import Activity2 from '../assets/img/portfolio/product-1.jpg'
import Activity3 from '../assets/img/portfolio/branding-1.jpg'
import ejo1 from '../assets/img/ejo/ejo1.jpg'
import ejo2 from '../assets/img/ejo/ejo2.jpg'
import ejo3 from '../assets/img/ejo/ejo3.jpg'
import ejo4 from '../assets/img/ejo/ejo4.jpg'
import ejo5 from '../assets/img/ejo/ejo5.jpg'
import ejo6 from '../assets/img/ejo/ejo6.jpg'
import ejo7 from '../assets/img/ejo/ejo7.jpg'
import ejo8 from '../assets/img/ejo/ejo8.jpg'



import { Link } from 'react-router-dom'
import PageHeader from './common/pageHeader'

const Activities = ({ more }) => {
  return (
    <>
  { more &&  <PageHeader title="Nos Activites recentes" description="Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti"/>}
    <section id="portfolio" className="portfolio sections-bg">
      <div className="container d-flex flex-column" data-aos="fade-up">
        <div className="section-header">
          <h2>Nos Activites recentes</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </div>

        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {more && (
            <div>
              <ul className="portfolio-flters">
                <li data-filter="*" className="filter-active">
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

          <div className="row gy-4 portfolio-container">
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <Link
                  to="/activities/details"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img src={ejo1} className="img-fluid" alt="" />
                </Link>
                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html" title="More Details">
                      Activite 1
                    </Link>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <Link
                  to="/activities/details"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img src={ejo2} className="img-fluid" alt="" />
                </Link>
                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html" title="More Details">
                      Activity 1
                    </Link>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <Link
                  to="/activities/details"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img src={ejo3} className="img-fluid" alt="" />
                </Link>
                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html" title="More Details">
                      Activity 1
                    </Link>
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}
            {more && (
              <>
                <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo4} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activ 1
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo5} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activity 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo6} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activity 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo7} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activity 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}
                <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo8} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activ 2
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo1} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activity 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo2} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activity 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo3} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activity 3
                        </Link>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div className="portfolio-wrap">
                    <Link
                      to="/activities/details"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={ejo4} className="img-fluid" alt="" />
                    </Link>
                    <div className="portfolio-info">
                      <h4>
                        <Link to="portfolio-details.html" title="More Details">
                          Activ 3
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
          className="see-more mt-4"
        >
          See More <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </section>
    </>
  )
}

export default Activities
