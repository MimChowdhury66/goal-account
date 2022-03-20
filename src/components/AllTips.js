import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const AllTips = () => {
    const [tips, setTips]= useState([]);
    useEffect(()=>{
        fetch('./tips.json')
        .then(res=>res.json()
        .then(data=>setTips(data)))

    },[])
    return (
        <div className='mt-5 mb-5'>
           <div className='mb-5'>
           <h1 className='title'>Find out how to make the most of your money.</h1>
            <p className='title text-center '>
            Our tips will assist you in taking charge of <br /> your financial destiny and achieving your goals.</p>
           </div>

            <div className='container'>
                <div className='row'>
                    {
                        tips.map(tip=>
                            // eslint-disable-next-line react/jsx-key
                            <div key={tip.id} className="col-md-4 mb-4 mx-auto">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title text-center mb-3 text-warning">{tip.name}</h5>
                                        <p className="card-text "><b>
                                        {tip.description}</b> </p>
                                    </div>


                                    <NavLink to={`/details/${tip?.id}`} >
                                        <button className="button btn btn-outline-primary w-100 "><i className="fab fa-readme"></i> Read More</button>
                                    </NavLink>

                                </div>
                            </div>
                            )
                    }

                </div>

            </div>



        </div>
    );
};

export default AllTips;