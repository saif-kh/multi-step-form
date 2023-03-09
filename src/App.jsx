import React, { useState } from "react";
import AddOns from "./AddOns";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";

const STEPS = ["your info", "select plan", "add-ons", "summary"];
const PLANS = [
  {
    icon: "icon-arcade.svg",
    title: "arcade",
    month_pay: 9,
    year_pay: 90,
  },
  {
    icon: "icon-advanced.svg",
    title: "advanced",
    month_pay: 9,
    year_pay: 120,
  },
  {
    icon: "icon-pro.svg",
    title: "pro",
    month_pay: 9,
    year_pay: 150,
  },
];

const ADD_ONS = [
  {
    title: "online services",
    subTitle: "access to multiplayer",
    isChecked: false,
    month_pay: 1,
    year_pay: 10,
  },
  {
    title: "larger storage",
    subTitle: "extra 1TB of cloud save",
    isChecked: false,
    month_pay: 2,
    year_pay: 20,
  },
  {
    title: "customizable profile",
    subTitle: "custom theme on your profile",
    isChecked: false,
    month_pay: 2,
    year_pay: 20,
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [chosenPlanIndex, setChosenPlanIndex] = useState(0);
  const [period, setPeriod] = useState("month");

  function handlePeriod() {
    if (period === "month") {
      setPeriod("year");
    } else {
      setPeriod("month");
    }
  }

  function handlePlan(i) {
    setChosenPlanIndex(i);
  }

  function goForward() {
    setCurrentStep((e) => e + 1);
  }

  function goBack() {
    setCurrentStep((e) => e - 1);
  }

  return (
    <div className="main-container">
      <div className="goofy-bg">
        {STEPS.map((step, i) => (
          <div key={i} className="step-wrapper">
            <div
              className={`circle ${
                (currentStep === i + 1 || (currentStep === 5 && i === 3)) &&
                "current-step"
              }`}
            >
              {i + 1}
            </div>
            <div className="text">
              <div>{`step ${i + 1}`}</div>
              <div>{step}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ungoofy-side">
        {currentStep === 1 && <PersonalInfo goForward={goForward} />}
        {currentStep === 2 && (
          <SelectPlan
            period={period}
            handlePeriod={handlePeriod}
            plans={PLANS}
            chosenPlanIndex={chosenPlanIndex}
            handlePlan={handlePlan}
            goBack={goBack}
            goForward={goForward}
          />
        )}
        {currentStep === 3 && (
          <AddOns
            period={period}
            add_ons={ADD_ONS}
            goBack={goBack}
            goForward={goForward}
          />
        )}
        {currentStep === 4 && (
          <Summary
            plan={PLANS[chosenPlanIndex]}
            add_ons={ADD_ONS}
            period={period}
            goBack={goBack}
            goForward={goForward}
          />
        )}
        {currentStep === 5 && (
          <div className="thank-you-container">
            <div>
              <img src="/assets/icon-thank-you.svg" alt="thank-you" />
            </div>
            <div>Thank you!</div>
            <div>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
