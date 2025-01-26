import React from "react";
import TextStack from "./TextStack";
import { IoStarSharp } from "react-icons/io5";

function Callout({ title, children, className }) {
  return (
    <section
      className={`
        flex flex-col lg:flex-row text-text-default gap-3xs
        ${className}
      `}
    >
      <IoStarSharp className="text-text-subtle text-[16px] flex-shrink-0 lg:my-[3px]" />
      <TextStack header={title} className="text-text-subtle font-mono italic">
        {children}
      </TextStack>
    </section>
  );
}

export default Callout;
