import React from "react";
import Tag from "./Tag";

function Section({ tagText, project, children, className }) {
  return (
    <section
      className={`
        flex flex-col text-text-default gap-sm items-start
        ${className}
      `}
    >
      <Tag text={tagText} theme={project} />
      <div className="flex flex-col gap-lg lg:gap-2xl">{children}</div>
    </section>
  );
}

export default Section;
