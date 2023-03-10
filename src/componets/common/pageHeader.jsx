import React from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link to="index.html">Home</Link></li>
            <li>{title}</li>
          </ol>
        </div>
      </nav>
    </div>
   );
}
 
export default PageHeader;