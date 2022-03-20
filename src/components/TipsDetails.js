import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TipsDetails.css'
const TipsDetails = () => {
    let { id } = useParams();
// console.log(id);




    const [tipsDetails, setTipsDetails]=useState([]);

    const [detail, setDetail] = useState({});

    useEffect(()=>{
        fetch('/tipsDetails.json')
        .then(res=>res.json())
        .then(data=>setTipsDetails(data.details))

    },[]);

    useEffect(()=>{
        const singleDetail= tipsDetails.find(detail => detail.id == id)
        setDetail(singleDetail)

    },[tipsDetails,id])
    
    


    return (
        <div className='container '>
{/* <h1>this is: {id}</h1> */}

            <div  className="row d-flex align-items-center justify-content-center middle">
                <div className="col-md-6 col-12">
                    <div className="mb-4 ">
                        <img className="img-fluid w-75 h-50 m-3  rounded" src={detail?.img} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    {/* <h1>{detail?.id} </h1> */}
                    <h4 className='text-primary text-center'> {detail?.name} </h4>
                    <hr className="w-75 mx-auto" />
                    
                    <h6 className="m-4"> {detail?.description} </h6>

                </div>
            </div>
        </div>
    );
};

export default TipsDetails;