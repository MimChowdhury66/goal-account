import React from 'react';

const FAQandTERM = () => {
    return (
        <div className=" m-5 mt-5 mb-5 title">
        <div className='row align-items-center mt-5 mb-5'>
            <div className='col col-md-6 col-sm-12'>
                <h2>FAQ's</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <b>What is Goal Account?</b>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-dark"><h6 className='text-start'>A Goal Account is a one-of-a-kind deposit that allows you to set aside money for certain purposes.

These are reoccurring deposit objectives with the extra benefit of being able to contribute any amount, at any time. Your Recurring Deposit, like a Fixed Deposit, earns higher interest rates. </h6></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <b>       Who is eligible to sign up for a Goal account?
</b>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-dark"><h6 className='text-start'>An individual who lives in the area and has at least one savings account with this bank is eligible to open the account.</h6></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <b>What is the procedure for creating a goal account?</b>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-dark"><h6 className='text-start'>At the time of goal creation, you will be asked to submit details about the objective (Amount you want and Target date).
After choosing "Create Goal Account," a form will appear, which you must fill out with accurate information in order for your goal to be created immediately. As soon as your goal is created, you can send funds to it. The goal balance, on the other hand, will be revealed within 4 hours of the goal being created.
Please keep in mind that the goal will not be created if
<br />

-You don't have enough money in your account,
<br />

-Your financing account has been frozen.</h6></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        <b>What are the minimum and maximum deposit amounts?</b>
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-dark"><h6 className='text-start'>Bdt. 500 is the lowest deposit amount, while Bdt. 49,999 is the maximum deposit amount.</h6></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        <b>Is there a minimum number of months or years required to attain objectives?</b>
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-dark"><h6 className='text-start'>You can set a goal for the month in which you wish to attain it. The objective term, however, cannot be less than 6 months or more than 5 years. This Program's recurring deposit/s can be kept for a minimum of 6 months and in multiples of 1 month up to a maximum of 5 years.</h6></div>
    </div>
  </div>
</div>
            </div>


            


            {/* terms and condition section */}

            <div className='col col-md-6 col-sm-12 mt-2'>
            <h2>Terms & Conditions</h2>

            <div>
            <h5 className='text-dark text-start'>Eligibility:<hr className='m-2 w-25' /></h5>
            </div>
            <div className='text-start text-dark'>
              <h6>* Customers must have legitimate and active internet banking access to their accounts in order to participate in this program.</h6>
              <h6>* A.</h6>
              
            </div>

            </div>

        </div>

</div>

    );
};

export default FAQandTERM;