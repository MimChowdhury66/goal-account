import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="title mt-5"><b>All Contact List</b></h1>
            <p className="title text-center mb-5">Get details plan of your goal account
            <br />
            Contact today of our officers and start SAVINGS</p>

            <div className='container'>
            <table className="fs-5 table m-3 table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"><i className="fas fa-user"></i> Name</th>
      <th scope="col"><i className="fas fa-phone-alt"></i> Phone</th>
      <th scope="col"><i className="fas fa-envelope"></i> Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom Jackson	</td>
      <td>555-444-333	</td>
      <td>tom@gmail.com
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mike James	</td>
      <td>555-777-888	</td>
      <td>mikejames@gmail.com
</td>
    </tr>
    
    <tr>
      <th scope="row">3</th>
      <td>Janet Larson	</td>
      <td>555-222-111	</td>
      <td>janetlarson@gmail.com
</td>
    </tr>
    
    <tr>
      <th scope="row">4</th>
      <td>Clark Thompson	</td>
      <td>555-444-333	</td>
      <td>clark123@gmail.com
</td>
    </tr>
    
  </tbody>
</table>
            </div>

        </div>
    );
};

export default Contact;