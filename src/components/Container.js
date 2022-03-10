import React, { useState } from "react";

import Calculus from "./Calculus";
import Display from "./Display";
import Months from "./Months";
import { MONTHS } from "../utils/constants";
import addMonthsFromCurrentDate from "../utils/addMonthsFromCurrentDate";

import { ReactComponent as House } from "../icons/insuranceAuto.svg";

import "./Container.css";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import Apply from "./Apply";

const Container = () => {
  const initialAmountMoney = 0;

  const [amountMoney, setAmountMoney] = useState(initialAmountMoney);
  const [monthsCounter, setMonthsCounter] = useState(1);

  const incrementedDate = addMonthsFromCurrentDate(monthsCounter - 1);
  const incrementedMonth = MONTHS[incrementedDate.getMonth()];
  const incrementedYear = incrementedDate.getFullYear();

  const onCalculusChange = ({ target: { value } }) => {
    const parsedValue = value.split(",").join("");
    setAmountMoney(parseFloat(parsedValue));
  };

  const incrementMonth = () => {
    const monthCounterIncremented = monthsCounter + 1;
    setMonthsCounter(monthCounterIncremented);
  };

  const decrementMonth = () => {
    if (monthsCounter > 1) {
      const monthCounterDecremented = monthsCounter - 1;
      setMonthsCounter(monthCounterDecremented);
    }
  };

  const calculateMonthlyAmount = (amount, months) => {
    return amount / months;
  };

  let isDecrementDisabled = monthsCounter <= 1;

  return (
    <div className="container">
      <h1 className="container__title ">
        Let's plan your <span>saving goals.</span>
        <br />
        Begin your financial planning today with a calculator <br />
         to assist you in making the best decision possible.
      </h1>
      <div className="container__box">
        <div className="container__box-logo">
          <House />
          <h1 className="text-warning">Savings goal calculator</h1>
          <p className="text-primary">Figure out how much  you need to reach your goal</p>
        </div>
        <div className="container__fields">
          <Calculus onCalculusChange={onCalculusChange} />
          <Months
            isDecrementDisabled={isDecrementDisabled}
            incrementMonth={incrementMonth}
            decrementMonth={decrementMonth}
            monthsCounter={monthsCounter}
            incrementedMonth={incrementedMonth}
            incrementedYear={incrementedYear}
          />
        </div>
        <Display
          monthlyAmount={calculateMonthlyAmount(amountMoney, monthsCounter)}
          months={monthsCounter}
          finalDate={`${incrementedMonth} ${incrementedYear}`}
        />
        <div >
          <p className="text">
          This calculator only provides general savings forecasts and does not account for the impact of taxes, inflation, or other variables that may affect your savings. When it comes to planning for your financial goals, we recommend speaking with an EBL advisor. The calculator's projections are based on the data you provide. Actual outcomes may differ due to a variety of circumstances, such as interest rate swings. The projections are also based on the assumption that you would keep contributing to your savings or investment account for the time period specified. The amount of money you make and other things will change over time. 
          <br />
          
          
          </p>


        </div>
        <div className="container__button ">
        
       <NavLink to="/apply">
       <button className="button btn btn-outline-warning p-2  w-100">
            Create Goal Account 
          </button>
         </NavLink>
        
         
        
          
          <NavLink to= "/contact">
          <button className="button btn btn-outline-warning  p-2 w-100 margin-left">
            Contact with an EBL officer
          </button></NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Container;
