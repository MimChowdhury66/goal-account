import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='mb-5 mt-5'>
            <h1 className='title'>About Goal Account</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-12 g-4 m-5 ">
  <div className="col mb-5">
    <div className="card h-100 border-primary">
      <div className="card-body ">
        <h3 className="card-title text-center text-warning">What is Goal Account?</h3>
        <h6 className="card-text text-center">Everyone can use Goal Accounts to save for specific impending expenses like a vacation or a new automobile. To keep budgets on track, Goal Accounts remove a specific amount from each paycheck automatically.

</h6>
      </div>
    </div>
  </div>
  <div className="col mb-5">
    <div className="card h-100 border-warning">
      <div className="card-body">
        <h3 className="card-title text-center text-warning">How does Goal Account work?</h3>
        <h6 className="card-text text-center">
        At Goal Account, we strive to provide you with a one-of-a-kind banking experience at all of our locations, enhancing your capacity to save and achieve your goals.
        </h6>
      </div>
    </div>
  </div>
  <div className="col mb-5">
    <div className="card h-100 border-primary">
      <div className="card-body">
        <h3 className="card-title text-center text-warning">Why Goal Account?</h3>
        <h6 className="card-text text-center">
        Goal Account allows you to break down the saving process and make it easier and more convenient. You give yourself time to save by setting goals. Many people are still impulsive with their money, and as a result, they rarely have enough cash on hand to buy what they really want.

        </h6>
      </div>
    </div>
  </div>
 
</div>

    </div>
    );
};

export default About;