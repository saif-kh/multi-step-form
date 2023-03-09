import React, { useState } from "react";
import ButtonsWrapper from "./ButtonsWrapper";
import ContentWrapper from "./ContentWrapper";

function SelectPlan({
  chosenPlanIndex,
  handlePlan,
  plans,
  period,
  handlePeriod,
  goBack,
  goForward,
}) {
  return (
    <>
      <ContentWrapper
        title="select your plan"
        subTitle="you have the option of monthly or yearly billing."
      >
        <div className="plans-wrapper">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`plan-card interactive-container ${
                chosenPlanIndex === i ? "chosen-card" : ""
              }`}
              tabIndex={0}
              onClick={() => handlePlan(i)}
            >
              <div className="img">
                <img src={`/assets/${plan.icon}`} alt="icon" />
              </div>
              <div className="text">
                <div>{plan.title}</div>
                <div>{`$${
                  period === "month" ? plan.month_pay : plan.year_pay
                }/${period === "month" ? "mo" : "yr"}`}</div>
                {period !== "month" && <div>2 months free</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="period-picker">
          <div className={`text ${period === "month" ? "chosen-text" : ""}`}>
            Monthly
          </div>
          <div className="period-picker-capsule" onClick={handlePeriod}>
            <div className={period === "year" ? "slide-to-right" : ""}></div>
          </div>
          <div className={`text ${period === "year" ? "chosen-text" : ""}`}>
            Yearly
          </div>
        </div>
      </ContentWrapper>
      <ButtonsWrapper step={2} goBack={goBack} handleClick={goForward} />
    </>
  );
}

export default SelectPlan;
