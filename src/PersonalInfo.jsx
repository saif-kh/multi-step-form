import React, { useState } from "react";
import ButtonsWrapper from "./ButtonsWrapper";
import ContentWrapper from "./ContentWrapper";

function PersonalInfo({ goForward }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    } else if (id === "phone") {
      setPhone(value);
    } else {
      setEmail(value);
    }
  }

  function checkErrors() {
    let error = false;
    const empty_field = "This field is required";

    if (!name) {
      setNameError(empty_field);
      error = true;
    } else if (!/^[a-z ,.'-]+$/i.test(name)) {
      setNameError("Unvalide name");
      error = true;
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError(empty_field);
      error = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Unvalide email address");
      error = true;
    } else {
      setEmailError("");
    }
    if (!phone) {
      setPhoneError(empty_field);
      error = true;
    } else if (
      !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone)
    ) {
      setPhoneError("Unvalide phone number");
      error = true;
    } else {
      setPhoneError("");
    }

    return error;
  }

  function handleSubmit() {
    if (checkErrors()) {
      return;
    }
    goForward();
  }

  return (
    <>
      <ContentWrapper
        title="personal info"
        subTitle="please provide your name, email address, and your phone number."
      >
        <div className="input-wrapper">
          <div>
            <label htmlFor="name">name</label>
            {nameError && <div className="error-msg">{nameError}</div>}
          </div>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            className={nameError ? "input-error" : ""}
          />
        </div>
        <div className="input-wrapper">
          <div>
            <label htmlFor="email">email address</label>
            {emailError && <div className="error-msg">{emailError}</div>}
          </div>
          <input
            value={email}
            onChange={handleChange}
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            className={emailError ? "input-error" : ""}
          />
        </div>
        <div className="input-wrapper">
          <div>
            <label htmlFor="phone">phone number</label>
            {phoneError && <div className="error-msg">{phoneError}</div>}
          </div>
          <input
            value={phone}
            onChange={handleChange}
            type="text"
            placeholder="e.g. +1 234 567 890"
            id="phone"
            className={phoneError && "input-error"}
          />
        </div>
      </ContentWrapper>
      <ButtonsWrapper step={1} handleClick={handleSubmit} />
    </>
  );
}

export default PersonalInfo;
