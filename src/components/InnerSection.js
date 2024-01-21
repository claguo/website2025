import React from "react";

function InnerSection(props) {
  return (
    <div className={`mt-[4rem] lg:mt-[8rem] ${props.className}`}>
      {props.children}
    </div>
  );
}

export default InnerSection;
