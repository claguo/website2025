import React from "react";
import Section from "../general/Section";
import { IoStarSharp } from "react-icons/io5";

function NextSteps(props) {
  return (
    <Section tagText="Next steps" project={props.project}>
      <div className="flex flex-col gap-4xs">
        {props.steps.map((step, index) => (
          <div key={index} className="flex gap-3xs items-center">
            <IoStarSharp className="text-[16px] text-text-subtle" />
            <p>{step} </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default NextSteps;
