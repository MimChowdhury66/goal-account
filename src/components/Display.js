import React from "react";
import formatCurrency from "../utils/formatCurrency";

import "./Display.css";

const Display = ({ monthlyAmount, months, finalDate }) => {
  const formattedMonthlyAmount = formatCurrency(monthlyAmount);
  return (
    <>
      <div className="display">
        <p>Monthly amount</p>
        <span className="display__result">BDT {formattedMonthlyAmount}</span>
      </div>
      <div className="display__info">
        <p>
          You're planning <span>{months} monthly deposits </span>
          of <span>BDT {formattedMonthlyAmount}</span>, you may reach goal by
          <span> {finalDate}</span>
        </p>
      </div>
    </>
  );
};

export default Display;
