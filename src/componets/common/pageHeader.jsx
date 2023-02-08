import React from 'react';

const PageHeader = ({title, description}) => {
  return ( 
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
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