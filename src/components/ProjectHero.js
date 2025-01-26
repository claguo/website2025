import React from "react";
import { useLocation } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

function ProjectHero(props) {
  const path = useLocation().pathname.slice(1);
  const project = useProjectContext().find((project) => project.path === path);

  return (
    <div className="flex flex-col mx-xs lg:mx-sm pt-2xl lg:pt-3xl gap-md lg:gap-2xl w-full">
      <div className="object-contain bg-bg-gray border-[1px] border-border-default rounded-[16px] px-lg py-md lg:px-4xl lg:py-xl flex justify-center">
        <img src={props.src} alt={project.alt} className="lg:max-w-[928px]" />
      </div>
      <h1 className="text-md font-mono italic lg:text-lg lg:w-[928px] lg:px-lg lg:self-center">
        {project.title}
      </h1>
    </div>
  );
}

export default ProjectHero;
