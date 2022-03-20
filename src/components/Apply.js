import React from 'react';

function Apply() {

  
    return (
      
        <div className='container mt-5'>
            <h1 className='text-primary mb-5 mt-5'><b>Apply online</b></h1>
     
     {/* apply form */}
            <form className="row g-3 fs-6">
  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label"><i className="fas fa-file-signature"> </i> FULL NAME</label>
    <input type="text" className="form-control" id="validationDefault01" required/>
  </div>
  {/* <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02"  required/>
  </div> */}

<div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label"><i className="fas fa-code-branch"> </i> PREFERRED BRANCH</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>ASHULIA BRANCH</option>
      <option>AZIMPUR BRANCH</option>
      <option>BANASREE BRANCH</option>
      <option>ENGLISH ROAD BRANCH</option>
      <option>UTTARA BRANCH</option>
    </select>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label"><i className="fas fa-envelope"> </i> EMAIL ADDRESS</label>
    <div className="input-group">
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label"><i className="fas fa-mobile"></i>  MOBILE NUMBER</label>
    <div className="input-group">
      <input type="number" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label"><i className="fas fa-map-marker-alt"> </i> ADDRESS</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  
  <div className="col-md-3">
    <label htmlFor="validationDefault05" className="form-label"><i className="fas fa-id-card"> </i> NID NUMBER</label>
    <input type="number" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label"><i className="fas fa-user-tie"> </i> PROFESSION</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>SERVICE</option>
      <option>BUSINESSMAN</option>
      <option>SELF-EMPLOYED</option>
      <option>STUDENT</option>
      <option>OTHER..</option>
    </select>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlFor="invalidCheck2">
      I authorise Eastern Bank Ltd. and its representatives to call me and/or SMS me      </label>
    </div>
  </div>

 
  <div className="col-12">
  {/* <!-- Button trigger modal --> */}
  {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
    <button className="btn  btn-outline-primary" type="submit" ><b>Submit</b></button>
    {/* modal */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-primary" id="staticBackdropLabel">Thank You for staying with us</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <h5>Our customer representative from your preferred branch will contact you within 03 (three) working days.</h5>

      </div>
      <div className="modal-footer">
        <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</form>

        </div>
    );
}

export default Apply;