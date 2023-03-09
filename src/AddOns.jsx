import React, { useState } from "react";
import ButtonsWrapper from "./ButtonsWrapper";
import ContentWrapper from "./ContentWrapper";

function AddOns({ period, add_ons, goBack, goForward }) {
  const [refresh, setRefsresh] = useState(true);

  function handleCheck(i) {
    add_ons[i].isChecked = !add_ons[i].isChecked;
    setRefsresh((e) => !e);
  }

  return (
    <>
      <ContentWrapper
        title="pick add-ons"
        subTitle="add-ons help enhance your gaming experience"
      >
        {add_ons.map((add_on, i) => (
          <div
            onClick={() => handleCheck(i)}
            key={i}
            className={`add-on-card interactive-container ${
              add_on.isChecked ? "chosen-card" : ""
            }`}
            tabIndex={0}
          >
            <div className="check">
              <img src="/assets/icon-checkmark.svg" alt="check" />
            </div>
            <div className="text">
              <div>{add_on.title}</div>
              <div>{add_on.subTitle}</div>
            </div>
            <div className="price">{`+$${
              period === "month" ? add_on.month_pay : add_on.year_pay
            }/${period === "month" ? "mo" : "yr"}`}</div>
          </div>
        ))}
      </ContentWrapper>
      <ButtonsWrapper step={3} goBack={goBack} handleClick={goForward} />
    </>
  );
}

export default AddOns;
