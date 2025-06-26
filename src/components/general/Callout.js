import React from "react";
import TextStack from "./TextStack";

function Callout({ title, children, className }) {
  return (
    <section
      className={`
        flex flex-col lg:flex-row text-text-default gap-4xs
        ${className}
      `}
    >
      {/* <IoStarSharp className="text-text-subtle text-[16px] flex-shrink-0" /> */}
      <span className="text-md font-bold">*</span>
      <TextStack header={title} className="mt-[1px]">
        {children}
      </TextStack>
    </section>
  );
}

export default Callout;
