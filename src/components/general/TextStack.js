import React from "react";

function TextStack({ header, className, children }) {
  return (
    <div className={`flex flex-col gap-3xs lg:2xs`}>
      {header && <span className={className}>{header}</span>}
      {children}
    </div>
  );
}

export default TextStack;
