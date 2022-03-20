import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Notfound.css'
const Notfound = () => {
    return (
        <div className='center '>
            <h1 className=' text-danger '>Not Found Error 404</h1>
            <br />
            <NavLink to="/home">
       <button className="button btn btn-outline-danger p-2 ">
            Go back Home 
          </button>
         </NavLink>
        
        </div>
    );
};

export default Notfound;