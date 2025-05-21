import React from "react";
import { useLocation } from "react-router-dom";
import { useProjectContext } from "../context/ProjectContext";

function ProjectSummary() {
  const path = useLocation().pathname.slice(1);
  const project = useProjectContext().find((project) => project.path === path);

  return (
    <div className="flex gap-xs lg:text-sm lg:text-sm lg:justify-between lg:gap-[3rem] text-xs lg:text-sm">
      <div className="flex flex-col gap-3xs lg:gap-xs flex-1">
        <span className="font-mono text-text-subtle text-sm italic">
          {" "}
          Category{" "}
        </span>
        <p> {project.category} </p>
      </div>

      <div className="flex flex-col gap-3xs lg:gap-xs flex-1">
        <span className="font-mono text-text-subtle text-sm italic">
          {" "}
          Team{" "}
        </span>
        <p> {project.team} </p>
      </div>

      <div className="flex flex-col gap-3xs lg:gap-xs flex-1">
        <span className="font-mono text-text-subtle text-sm italic">
          {" "}
          Duration{" "}
        </span>
        <p> {project.duration} </p>
      </div>
    </div>
  );
}

export default ProjectSummary;
