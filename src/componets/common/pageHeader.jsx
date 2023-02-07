import React from 'react';

const PageHeader = ({title, description}) => {
  return ( 
    <div class="breadcrumbs">
      <div class="page-header d-flex align-items-center">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>{title}</li>
          </ol>
        </div>
      </nav>
    </div>
   );
}
 
export default PageHeader;