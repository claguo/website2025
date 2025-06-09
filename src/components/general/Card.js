import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={`flex flex-col pb-sm border-border-default gap-3xs lg:gap-2xs ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;

// used to have px-[20px] py-sm rounded-sm
