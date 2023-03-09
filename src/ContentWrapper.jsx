import React from "react";

function ContentWrapper({ title, subTitle, children }) {
  return (
    <div className="content-wrapper">
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default ContentWrapper;
