import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={`flex flex-col px-[20px] py-sm rounded-[12px] lg:rounded-[16px] border-[1px] border-border-default gap-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
