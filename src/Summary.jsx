import React, { useEffect, useState } from "react";
import ButtonsWrapper from "./ButtonsWrapper";
import ContentWrapper from "./ContentWrapper";

function Summary({ period, plan, add_ons, goBack, goForward }) {
  const [total, setTotal] = useState(0);
  const _period = period === "month" ? "mo" : "yr";

  useEffect(() => {
    let _period = period === "month" ? "month_pay" : "year_pay";
    let add_ons_price = 0;
    for (let i = 0; i < add_ons.length; i++) {
      if (add_ons[i].isChecked) add_ons_price += add_ons[i][_period];
    }
    setTotal(plan[_period] + add_ons_price);
  }, []);
  return (
    <>
      <ContentWrapper
        title="finishing up"
        subTitle="double-check everything looks OK before confirming."
      >
        <div className="results-wrapper">
          <div className="base-pay">
            <div className="text">
              <div>{`${plan.title} (${
                period === "month" ? "Monthly" : "Yearly"
              })`}</div>
              <button>change</button>
            </div>
            <div>{`$${
              period === "month" ? plan.month_pay : plan.year_pay
            }/${_period}`}</div>
          </div>
          <div className="add-ons-pay">
            {add_ons.map((add_on, i) => {
              if (add_on.isChecked) {
                return (
                  <div key={i} className="card">
                    <div>{add_on.title}</div>
                    <div>{`+$${
                      period === "month" ? add_on.month_pay : add_on.year_pay
                    }/${_period}`}</div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="total-wrapper">
          <div>{`Total (per ${period})`}</div>
          <div>{`$${total}/${_period}`}</div>
        </div>
      </ContentWrapper>
      <ButtonsWrapper step={4} goBack={goBack} handleClick={goForward} />
    </>
  );
}

export default Summary;
