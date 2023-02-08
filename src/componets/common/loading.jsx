import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import logo from '../../assets/img/logo.png';


const Loading = ({loading, color}) => {
  return ( 
    <div className='loading'>
      <img src={logo} className="" alt="" />
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
  />
    </div>
   );
}
 
export default Loading;