import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TipsDetails = () => {
    let { id } = useParams();
    const [tipsDetails, setTipsDetails]=useState([]);

    const [detail, setDetail] = useState({});

    useEffect(()=>{
        fetch('/tipsDetails.json')
        .then(res=>res.json())
        .then(data=>setTipsDetails(data.details))

    },[]);

    useEffect(()=>{
        const singleDetail= tipsDetails.find(detail=>detail.id == id)
        setDetail(singleDetail)
    },[tipsDetails, id])

    return (
        <div className='container'>
            <div  className="row d-flex align-items-center justify-content-center ">
                <div className="col-md-6 mt-4">
                    <div className="mb-4 mt-4">
                        <img className="img-fluid w-50 h-50" src={detail?.img} alt="" />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <h1>{id} </h1>
                    {/* <h4> {detail?.name} </h4>
                    <hr className="w-50 mx-auto" />
                    
                    <p className="m-4"> {detail?.description} </p> */}

                </div>
            </div>
        </div>
    );
};

export default TipsDetails;