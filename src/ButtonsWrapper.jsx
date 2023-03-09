import React from "react";

function ButtonsWrapper({ step = 1, goBack = null, handleClick }) {
  return (
    <div className="buttons-wrapper">
      {step !== 1 && (
        <button className="secondary" onClick={goBack}>
          go back
        </button>
      )}
      <button
        className={`primary ${step === 4 ? "final" : ""}`}
        onClick={handleClick}
      >
        {step !== 4 ? "next step" : "confirm"}
      </button>
    </div>
  );
}

export default ButtonsWrapper;
