import React from 'react';
import Logo from '../images/banner.png'
const Banner = () => {
    return (
        
            <div className="container">
                <div className='row align-items-center mt-5 mb-5'>
                    <div className='col col-md-6 col-sm-12 col-12'>
                        <img className='img-fluid' src={Logo} alt="" />
                    </div>
                    <div className='col col-md-6 col-sm-12 col-12'>
                    <h3 className=" text-center text-warning">Are you looking for financial guidance?</h3>
                    <h5 className=" text-center" >Budgeting and savings can help you achieve your
                    <br /> <span className="text-primary"><b>financial goals</b></span>. 
            <br/>
             Learn money management strategies and tips.</h5>
             <h3 className=" text-center">Create your <span className='text-warning'><b>GOAL ACCOUNT</b></span> today</h3>

                    </div>

                </div>
      
    </div>

    
    );
};

export default Banner;