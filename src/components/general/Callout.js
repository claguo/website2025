import React from "react";
import TextStack from "./TextStack";

function Callout({ title, children, className }) {
  return (
    <section
      className={`
        flex flex-col lg:flex-row text-text-default gap-3xs
        ${className}
      `}
    >
      {/* <IoStarSharp className="text-text-subtle text-[16px] flex-shrink-0" /> */}
      <span className="text-md">*</span>
      <TextStack header={title} className="mt-[1px] text-text-subtle font-mono">
        {children}
      </TextStack>
    </section>
  );
}

export default Callout;
