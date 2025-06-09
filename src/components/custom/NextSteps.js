import React from "react";
import Section from "../general/Section";

function NextSteps(props) {
  return (
    <Section tagText="Next steps" project={props.project}>
      <div className="flex flex-col gap-5xs">
        {props.steps.map((step, index) => (
          <div key={index} className="flex gap-3xs">
            <span className="text-[16px]">*</span>
            <p>{step} </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default NextSteps;
