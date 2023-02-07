import React from 'react';
import client1 from '../assets/img/clients/client-1.png';
import client8 from '../assets/img/clients/client-2.png';
import client2 from '../assets/img/clients/client-3.png';
import client3 from '../assets/img/clients/client-4.png';
import client4 from '../assets/img/clients/client-5.png';
import client5 from '../assets/img/clients/client-6.png';
import client6 from '../assets/img/clients/client-7.png';
import client7 from '../assets/img/clients/client-8.png';

const Partners = () => {
  return (
    // <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients sections-bg">
        <div class="section-header p-2">
          <h2>Our Partners</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
      <div class="container" data-aos="zoom-out">
        <div class="clients-slider swiper">
          <div class="d-flex align-items-center">
            <div class=""><img src={client1} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client8} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client2} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client3} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client4} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client5} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client6} class="img-fluid p-4" alt=""/></div>
            <div class=""><img src={client7} class="img-fluid p-4" alt=""/></div>
          </div>
        </div>

      </div>
    </section>

    );
}
 
export default Partners;